var passwordData = require("../repo/schemas/passwordSchema");
var userAsset = require("../repo/schemas/uerDetails_New");
var assertCreation = require("../repo/schemas/assets_new");

async function PasswordRepo(body) {
  let savePassword = new passwordData(body);
  console.log("RepoBodyCheck", body);
  return await savePassword.save();
}

async function User_Details_Asset(body) {
  try {
    let saveassetuserdetails = new userAsset(body);

    // let CheckAssertName = await userAsset

    let assert = await saveassetuserdetails.findOne({ Name: body.Name });

    console.log("CheckAssertName", CheckAssertName);

    if (assert) {
      return "user already exists";
    }

    return await saveassetuserdetails.save();
  } catch (error) {
    console.log("error", error);
  }
}

async function asser_creation(body) {
  try {
    let saveAssertDetails = new assertCreation(body);

    return await saveAssertDetails.save();
  } catch (error) {
    console.log("error", error);
  }
}

async function Buy_asserCreation(body) {
  try {
    // let deatils = new assertCreation(body);

    let result = await assertCreation.findOne({ userName: body.userName });

    console.log("resultprint", result);

    if (!result) {
      return "user not found";
    } else {
      let byuDetails = result?.quantity - body.quantity;
      if (result?.quantity === 0) {
        return "No Quantity avaviable";
      } else {
        console.log("result?.quantity", byuDetails);
        console.log("result?.quantity", result?.quantity);

        let finalResult = await assertCreation.updateOne(
          {
            $or: [{ quantity: byuDetails }, { userName: body.userName }],
          },
          {
            $set: {
              quantity: byuDetails,
            },
          }
        );
        return finalResult;
      }
    }
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = {
  PasswordRepo,
  User_Details_Asset,
  asser_creation,
  Buy_asserCreation,
};

//database connection  with database?
