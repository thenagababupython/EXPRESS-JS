const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
    let errorsArray = [
        { value: '',
            msg: '',
            param: '',
            location: '' }
    ];
    let user = {
        email: '',
        password: '',
        c_password: ''
    };
  res.render('index.ejs',{errorsArray : errorsArray, user : user});
});


/* POST Register Form . */
router.post('/register', [
    check('email').isEmail(),
    check('password').isLength({min : 5}),
    check('c_password').custom((value , {req}) => {
        if(value !== req.body.password){
            throw Error;
        }
        else{
            return true;
        }
    })
] , urlencodedParser , function(req, res, next) {
    let user = req.body;
    let errorsArray = validationResult(req).errors;
    console.log(errorsArray);
    res.render('index.ejs',{errorsArray : errorsArray , user : user});
});

module.exports = router;
