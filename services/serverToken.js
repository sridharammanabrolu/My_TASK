
const jwt = require('jsonwebtoken');

const payload = { username: 'john_doe' };
const secretKey = 'your_secret_key';
const expiresIn = 3; 

const token = jwt.sign(payload, secretKey,{expiresIn : expiresIn * 60});
console.log(token,"Token validator");

function tokenCheckPage(req,res,next){


    if (req.path === '/bookpublisher/login') {
        return next();
    }
    console.log("Data Log Hitted");
 
// if()
console.log(req.headers.authorization, 'token',req.headers.authorization.toString().replace("Bearer ",''));

const FinalToken = req.headers.authorization.toString().replace("Bearer ",'');

const decodedToken = jwt.decode(FinalToken);
// console.log(decodedToken,"{}{}{}")

const resultVALUE = jwt.verify(FinalToken,secretKey)

const expirationTime = decodedToken.exp;

console.log("rrsssssssssssssssss",resultVALUE)
console.log("Decoded Token Value",expirationTime)

console.log('Token expiration time:', new Date(expirationTime * 1000));

console.log("final token",FinalToken);
// res.send("Done")
next()
}

module.exports= tokenCheckPage;