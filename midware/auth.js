const dotenv = require('dotenv');
dotenv.config();

const config = {
  authenticationRequired: false,
  authentication0LogOut: true,
  clientID: process.env.CLIENT_ID,
  basicURL: process.env.BASIC_URL,
  pubBaseURL: process.env.PUB_BASE_URL,
  private: process.env.PRIVATE
};

module.exports = { config };