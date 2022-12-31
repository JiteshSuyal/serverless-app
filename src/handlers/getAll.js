const { connectDatabase } = require("../database/connection");
const User = require("../models/user.model");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    userObj = await User.find();

    return {
      statusCode: 200,
      body: JSON.stringify(userObj),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
