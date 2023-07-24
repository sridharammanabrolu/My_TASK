 var express = require('express');

 const {
    EMPLOYEEPASSWORD
 } = require('../utils/endpoints');

 const { serviceHandler } = require('../services/common_service');
const  loginCheck = require('../services/loginService');

 const router = express.Router();

 router.post(
  EMPLOYEEPASSWORD,
  serviceHandler(loginCheck.PasswordCheck)
 )

module.exports = router;
