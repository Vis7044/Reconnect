const multer = require('multer');
const uploadPdf = require('../controllers/FileUpload');

const UserFileController = (req, res) => {
    try {
      uploadPdf.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({
            message: 'File size must be less than 1MB',
            error: err.message,
          });
        } else if (err) {
          return res.status(500).json({
            message: 'File upload failed',
            error: err.message,
          });
        }
        if (req.file) {
          return res.status(200).json({
            message: 'File uploaded successfully',
            file: req.file.path,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: 'File upload failed',
        error: error.message,
      })
    }
  };




  module.exports = {
    UserFileController,
  }