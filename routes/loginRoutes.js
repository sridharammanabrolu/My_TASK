var express = require("express");

const {
  EMPLOYEEPASSWORD,
  ASSETUSERDETAILS,
  CREATEASSERT,
  BUYASSERTBYUSERNAME,
} = require("../utils/endpoints");

const { serviceHandler } = require("../services/common_service");
const loginCheck = require("../services/loginService");

const router = express.Router();

router.post(EMPLOYEEPASSWORD, serviceHandler(loginCheck.PasswordCheck));

router.post(ASSETUSERDETAILS, serviceHandler(loginCheck.User_Details));

router.post(CREATEASSERT, serviceHandler(loginCheck.asser_creation));

router.post(BUYASSERTBYUSERNAME, serviceHandler(loginCheck.Buy_assert));

module.exports = router;
