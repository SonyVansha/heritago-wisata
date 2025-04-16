const express = require("express");
const { getUsers } = require("../controllers/userController");
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get("/", getUsers);

module.exports = router;