const { validationResult } = require ('express-validator');

const payloadValidte = (req, res, next) => {
    // console.log(req.body);   
    const errorsObj = validationResult(req);
    if(!errorsObj.isEmpty()){
        const allErrArr = errorsObj.array();
        let errorMsgErr = [],
            response;
        for(let i=0; i<allErrArr.length; i++){
            errorMsgErr.push(allErrArr[i].msg);
        }

        response = {
            code: 400,
            success : false,
            res: {
                errors: errorMsgErr
            }
        }

        res.status(400).json(response);
    }else{
        next();
    }
}


module.exports = payloadValidte;