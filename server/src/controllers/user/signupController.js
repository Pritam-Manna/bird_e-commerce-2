const BcryptCon = require('../../services/passwordEncrypt/bcryptCon');
const MongoCon = require('../../models/mongoCon');
const signupController = async (req, res, next) => {
    bcryptObj = new BcryptCon();
    mongoObj = new MongoCon();
    encPass = await bcryptObj.getEncryptedPass(req.body.password);
    signupRes = await mongoObj.signup(req.body, encPass);
    console.log(signupRes);
    res.send("User created");
}

module.exports = signupController;