// Регестрация пользователя
const express = require('express')
const controlles = require("../controlles/auth")
const router = express.Router()

router.get("/login", controlles.login)
router.get("/register", controlles.register)

module.exports = router