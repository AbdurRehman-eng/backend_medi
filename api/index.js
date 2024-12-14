const app = require('../index'); // Import your Express app
const serverless = require("serverless-http");

module.exports = serverless(app);
