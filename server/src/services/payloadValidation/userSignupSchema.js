const { body } = require('express-validator');

const userSignupSchema = () => {
    return [
        body('fullname')
        .notEmpty().withMessage("Fullname required."),

        body('phone')
        .isMobilePhone().withMessage("Invalid Phone number."),

        body('email')
        .isEmail().withMessage("Invalid Email"),

        body('password')
        .isLength( {min:5}).withMessage("Password must contain atleast 5 digits")
    ]
}

module.exports = userSignupSchema;