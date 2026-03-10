exports.updateProfile = async (req,res)=>{

  const user = await User.findById(req.user.id);

  if(req.file){
    const result = await cloudinary.uploader.upload(req.file.path);
    user.avatar = result.secure_url;
  }

  user.username = req.body.username || user.username;
  user.email = req.body.email || user.email;
  user.bio = req.body.bio || user.bio;

  await user.save();

  res.json(user);

};