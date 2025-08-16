// dotenv.config() is already called in server.js, so environment variables are available globally

const loginInfo = process.env.EMAIL
const passwordInfo = process.env.PASSWORD

console.log('=== Environment Variables Debug ===');
console.log('EMAIL from env:', `"${loginInfo}"`);
console.log('PASSWORD from env:', `"${passwordInfo}"`);
console.log('===================================');

exports.verifyCredentials = (login, password) => {
    if (login===loginInfo && password===passwordInfo) {
        console.log('Credentials match!');
        return true
    } else {
        console.log('Credentials do not match!');
        return false
    }
}



