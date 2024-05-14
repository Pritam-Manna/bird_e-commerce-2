
const express = require('express');
const router = express.Router();
const path = require('path');

const servicePath = path.join(__dirname,"../../services/payloadValidation");
const controllerPath = path.join(__dirname,'../../controllers/user');


/*------------------------Payload Schema and validators------------------------*/
const payloadValidte = require(`${servicePath}/payloadValidate`);

const userSignupSchema = require(`${servicePath}/userSignupSchema`);
const userLoginSchema = require(`${servicePath}/userLoginSchema`);
const userLogoutSchema = require(`${servicePath}/userLogoutSchema`);

/*------------------------Controllers------------------------*/
const signupController = require(`${controllerPath}/signupController`);
const loginController = require(`${controllerPath}/loginController`);
const logoutController = require(`${controllerPath}/logoutController`);


/*------------------------Routers------------------------*/
router.post("/signup",userSignupSchema(), payloadValidte, signupController);

router.post("/login",userLoginSchema(), payloadValidte, loginController);

router.post("/logout",userLogoutSchema(), payloadValidte, logoutController);


module.exports = router;


