const loginRepo = require("../repo/loginRepo");

async function loginCheck(req, res) {
  console.log("rddredxreresresresrsrssesreesrsreressre");
  try {
    let loginServiceSave = loginRepo.loginRepo(req.body);

    return loginServiceSave;
  } catch (error) {
    console.log("error", error);
  }
}

async function PasswordCheck(req, res) {
  console.log("reqreqreqreq", req.body);
  try {
    let password = loginRepo.PasswordRepo(req.body);

    return password;
  } catch (error) {
    console.log("error", error);
  }
}

async function User_Details(req, res) {
  try {
    let userDetailsAsset = loginRepo.User_Details_Asset(req.body);

    return userDetailsAsset;
  } catch (error) {
    console.log("error", error);
  }
}

async function asser_creation(req, res) {
  try {
    let assertDetails = loginRepo.asser_creation(req.body);

    return assertDetails;
  } catch (error) {
    console.log("error", error);
  }
}

async function Buy_assert(req, res) {
  try {
    let buyAssert = loginRepo.Buy_asserCreation(req.body);

    return buyAssert;
  } catch (error) {
    console.log("error", error);
  }
}

async function publisherSignUp(req, res) {
  try {
    let signUpService = loginRepo.signUpRepo(req.body);

    console.log("serviceBodyCheck", req.body);

    return signUpService;
  } catch (err) {
    console.log("err", err);
  }
}

module.exports = {
  loginCheck,
  publisherSignUp,
  PasswordCheck,
  User_Details,
  asser_creation,
  Buy_assert,
};
