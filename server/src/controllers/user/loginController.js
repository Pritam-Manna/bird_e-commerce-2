const BcryptCon = require('../../services/passwordEncrypt/bcryptCon'); 
const MongoCon = require('../../models/mongoCon');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginController = async (req, res, next) => {
    let preparedRes;
    bcryptObj = new BcryptCon();
    mongoObj = new MongoCon();
    encPass = await bcryptObj.getEncryptedPass(req.body.password);
    loginRes = await mongoObj.login(req.body, encPass);
    preparedRes = prepareRes(loginRes, req.body);
    console.log(req.session);
    res.status(preparedRes.code).json(preparedRes);
}

const prepareRes = (loginRes, data)=>{
    let response;
    if(loginRes.error){
        response = {
            code: 400,
            success : false,
            res: {
                errors: ["Unable to authenticate the user, please try after sometime."]
            }
        }        
    }else{
        if(loginRes.res === 0){
            response = {
                code: 400,
                success : false,
                res: {
                    errors: ["Username or Password is invalid"]
                }
            }
        }else{
            let token = jwt.sign({ email: data.email }, process.env.jtwKey);
            response = {
                code: 200,
                success : true,
                res: {
                    token: token,
                }
            }
        }
    }
    return response;
}

module.exports = loginController;