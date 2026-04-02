const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

// ================= SETUP =================

// Upload directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// FFmpeg path (required for Docker)
ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');

// Multer config
const upload = multer({ dest: uploadDir });


// ================= API =================

app.post('/api/generate', upload.any(), async (req, res) => {
  try {
    const mediaFile = req.files.find(f => f.fieldname === 'media');
    const audioFile = req.files.find(f => f.fieldname === 'audio');
    
    if (!mediaFile || !audioFile) {
      return res.status(400).send('Upload media and audio');
    }
    
    const mediaPath = mediaFile.path;
    const audioPath = audioFile.path;
    const outputPath = path.join(uploadDir, `output_${Date.now()}.mp4`);
    
    // ✅ GET AUDIO DURATION (IMPORTANT)
    ffmpeg.ffprobe(audioPath, (err, metadata) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to read audio");
      }
      
      const duration = metadata.format.duration; // 👈 real duration (e.g. 90 sec)

      const isImage = mediaFile.mimetype.startsWith('image');

      let command = ffmpeg();

      if (isImage) {
        command.input(mediaPath)
               .loop(duration);   // 👈 FIX HERE
      } else {
        command.input(mediaPath);
      }

      command
        .input(audioPath)
        .outputOptions([
          '-c:v libx264',
          '-tune stillimage',
          '-c:a aac',
          '-b:a 128k',
          '-pix_fmt yuv420p',
          `-t ${duration}` // 👈 FORCE FULL LENGTH
        ])
        .save(outputPath)

        .on('start', cmd => {
          console.log("FFmpeg:", cmd);
        })

        .on('end', () => {
          res.download(outputPath, 'video.mp4', () => {
            cleanup([mediaPath, audioPath, outputPath]);
          });
        })

        .on('error', (err, stdout, stderr) => {
          console.error("FFmpeg ERROR:", err.message);
          console.error(stderr);

          cleanup([mediaPath, audioPath]);

          res.status(500).send("Processing failed");
        });
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// ================= CLEANUP =================

function cleanup(files) {
  files.forEach(file => {
    try {
      if (file && fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    } catch (e) {
      console.error('Cleanup error:', e.message);
    }
  });
}

// ================= START =================

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});