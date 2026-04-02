const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// ================= API =================
app.post(
  '/api/generate',
  upload.fields([
    { name: 'media', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
    { name: 'photos', maxCount: 10 }
  ]),
  async (req, res) => {
    try {
      if (!req.files?.media || !req.files?.audio) {
        return res.status(400).send('Missing files');
      }

      const mediaPath = req.files.media[0].path;
      const audioPath = req.files.audio[0].path;
      const photos = req.files.photos || [];

      const outputPath = path.join(uploadDir, `output_${Date.now()}.mp4`);
      const listFile = path.join(uploadDir, `list_${Date.now()}.txt`);

      const totalDuration = 40;

      // ================= SLIDESHOW =================
      if (photos.length > 0) {
        const perPhoto = totalDuration / photos.length;

        let content = photos
          .map(p => `file '${p.path}'\nduration ${perPhoto}`)
          .join('\n');

        // repeat last image (important fix)
        content += `\nfile '${photos[photos.length - 1].path}'`;

        fs.writeFileSync(listFile, content);
      }

      const isImage = req.files.media[0].mimetype.startsWith('image');

      const command = ffmpeg();

      // Background
      if (photos.length > 0) {
        command.input(listFile).inputOptions(['-f concat', '-safe 0']);
      } else {
        command.input(mediaPath);
      }

      // Foreground
      command.input(mediaPath);

      // Audio
      command.input(audioPath);

      // ================= FILTER =================
      const filters = [
        '[0:v]scale=1280:720,boxblur=10:1[bg]',
        isImage
          ? '[1:v]loop=9999:size=1:start=0,scale=400:-1[fg]'
          : '[1:v]scale=400:-1[fg]',
        '[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]'
      ];

      command.complexFilter(filters);

      // ================= OUTPUT =================
      command.outputOptions([
        '-map [outv]',
        '-map 2:a',
        '-c:v libx264',
        '-c:a aac',
        '-pix_fmt yuv420p',
        '-t 40',
        '-r 30'
      ]);

      // ================= RUN =================
      command
        .save(outputPath)
        .on('start', cmd => console.log("FFmpeg:", cmd))
        .on('end', () => {
          res.download(outputPath, 'final.mp4', () => {
            cleanup([
              mediaPath,
              audioPath,
              listFile,
              ...photos.map(p => p.path),
              outputPath
            ]);
          });
        })
        .on('error', (err, stdout, stderr) => {
          console.error("FFmpeg Error:", err.message);
          console.error(stderr);

          cleanup([
            mediaPath,
            audioPath,
            listFile,
            ...photos.map(p => p.path)
          ]);

          res.status(500).send('Processing failed');
        });

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
);

// ================= CLEANUP =================
function cleanup(files) {
  files.forEach(file => {
    try {
      if (file && fs.existsSync(file)) fs.unlinkSync(file);
    } catch (e) {
      console.error("Cleanup error:", e.message);
    }
  });
}

app.listen(5000, () => {
  console.log('Server running on port 5000');
});