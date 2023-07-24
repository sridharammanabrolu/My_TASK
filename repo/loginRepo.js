

var passwordData = require('../repo/schemas/passwordSchema')

async function PasswordRepo(body){

    let savePassword = new passwordData(body)
    console.log("RepoBodyCheck", body)
    return await savePassword.save()
}

module.exports = {
    PasswordRepo
}

//database connection  with database?