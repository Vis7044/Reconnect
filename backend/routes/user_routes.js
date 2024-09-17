const express = require('express');
const { UserFileController } = require('../controllers/UserController');
const UserRouter = express.Router();



UserRouter.get('/users', (req, res) => {
  res.send('GET /users');
});


UserRouter.post('/upload', UserFileController);

module.exports = UserRouter;
