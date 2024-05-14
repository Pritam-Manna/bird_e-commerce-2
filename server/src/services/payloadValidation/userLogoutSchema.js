const { body, header } = require('express-validator');

const userLogoutSchema = () => {
    return [
        header('authorization')
        .notEmpty().withMessage("Authorization token required")
    ]
}

module.exports = userLogoutSchema;