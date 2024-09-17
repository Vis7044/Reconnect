const express = require('express');
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ReConnect',
        public_id: (req,file) => file.originalname.split('.')[0] + '-' + Date.now(),
        resource_type: 'raw',
        format: async (req,file) => 'pdf'
    }
});

const uploadPdf = multer({storage: storage,limits: {fileSize: 1 * 1024 *1024}});

module.exports = uploadPdf;