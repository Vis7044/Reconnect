const express = require('express');
const uploadPdf = require('../controllers/FileUpload');
const UserRouter = express.Router();

UserRouter.get('/users', (req, res) => {
  res.send('GET /users');
})

UserRouter.post('/upload',uploadPdf.single('file'), (req, res) => {
    res.json({
        message: 'File uploaded successfully',
        url: req.file.path
    })
});

module.exports = UserRouter;