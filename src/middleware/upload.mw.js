const path = require('path');
const multer = require('multer');
const { staticPath } = require('../config/staticConfig');

const storageLogoImage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve(staticPath, 'images', 'logos'));
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
});

const filterLogoImage = (req, file, cb) => {
  const MIMETYPE_REGEXP = /^image\/{jpeg|png|jpg}$/;

  if(MIMETYPE_REGEXP.test(file.mimetype)) {
    return cb(null, true)
  }
  cb(null, false)
};

module.exports.uploadBrandImages = multer({
  storage: storageLogoImage,
  fileFilter: filterLogoImage
})
