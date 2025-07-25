require('dotenv').config();


const loginInfo = process.env.login
const passwordInfo = process.env.password


exports.verifyCredentials = (login, password) => {
    if (login===loginInfo && password===passwordInfo) {
        return true
    } else {
        return false
    }
}



