const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = class BcryptCon{
    constructor(){
        this.salt = process.env.bcryptSalt;
    }
    getEncryptedPass(rawPass){
        const encryptedPass = bcrypt.hash(rawPass,this.salt);
        return encryptedPass;
    }
}