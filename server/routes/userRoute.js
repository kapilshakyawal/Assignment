const { registration, login, pushByManufacturer } = require("../controllers/userController")

const router =require("express").Router()

router.route("/registration").post(registration)
router.route("/login").post(login)
router.route("/push-by-manufacturer").post(pushByManufacturer)
module.exports = router