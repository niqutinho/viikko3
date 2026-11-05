import sharp from "sharp";

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  try {
    const thumbnailPath = `${req.file.path}_thumb.png`;
    await sharp(req.file.path).resize(160, 160).png().toFile(thumbnailPath);
    req.file.thumbnail = thumbnailPath;
    next();
  } catch (error) {
    next(error);
  }
};

export { createThumbnail };
