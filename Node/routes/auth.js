const express = require('express');
const router = express.Router();

const { createUser, loginUser, revalidateToken, changePassword } = require("../controllers/auth")

router.post("/", loginUser);
router.post("/new", createUser);
router.get("/renew", revalidateToken);
router.post("/password", changePassword);

module.exports = router