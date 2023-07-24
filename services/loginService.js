const loginRepo = require("../repo/loginRepo")

async function loginCheck (req,res){
    console.log('rddredxreresresresrsrssesreesrsreressre')
    try {

        let loginServiceSave = loginRepo.loginRepo(req.body)

        return loginServiceSave;

    } catch(error) {
      console.log("error",error)
    }
}

async function PasswordCheck(req,res){
    console.log("reqreqreqreq",req.body)
    try {

        let password = loginRepo.PasswordRepo(req.body)

        return password ;
        
    } catch(error){

        console.log("error",error)
    }
}



async function publisherSignUp(req,res){

    try {

        let signUpService = loginRepo.signUpRepo(req.body);

        console.log("serviceBodyCheck",req.body)

        return signUpService;

    } catch(err){
        console.log("err",err)
    }
}



module.exports = {
    loginCheck,
    publisherSignUp,
    PasswordCheck
}