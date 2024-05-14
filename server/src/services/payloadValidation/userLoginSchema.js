const { body } = require('express-validator');

const userLoginSchema = () => {
    return [
        body('email')
        .isEmail().withMessage("Invalid Email"),

        body('password')
        .isLength( {min:5}).withMessage("Password must contain atleast 5 digits")
    ]
}

module.exports = userLoginSchema;