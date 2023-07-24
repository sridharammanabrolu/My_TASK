
const mongoose = require('mongoose')

const passwordSchema = mongoose.Schema(
    {
        Password : {
            type : String,
            required : true,
            trim : true
        }
    }
)
module.exports = mongoose.model('mypassword', passwordSchema);

