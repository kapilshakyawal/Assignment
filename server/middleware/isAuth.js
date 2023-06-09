const jwt = require("jsonwebtoken")
exports.isLoggedIn = () => {
const {token } = req.body
const decodeToken=  jwt.verify(token,"kapilshakyawalhere")

}