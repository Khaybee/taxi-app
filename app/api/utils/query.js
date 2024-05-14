// sql queries for authentication

const insertSignup = `insert into user( fullName, email, password, salt, otp) values(?,?,?,?,?)`;

const checkEmailLogin = `select * from user where email = ?`;

const checkotp = `select * from user where id = ?`;

const updateLogin = "update user set password = ?, salt = ? where email = ?";

const updateVerify = "update user set isVerified = ?, otp = NULL where id = ?";

const updateOTP = "update user set otp = ? where email = ?"

const saveNewSubs = "insert into NewsLetter(email) values(?)"

const subExist = "select * from NewsLetter where email=?"



// const insertAdd = "Insert"

module.exports = {
     insertSignup,
    checkEmailLogin,
    checkotp,
    updateLogin,
    updateVerify,
    updateOTP,
    saveNewSubs,
    subExist
}
