const { connect } = require("mongoose");
require("dotenv").config();

module.exports = {
  async start() {
    try {
      const urlConnect = process.env.tokenData;

      if (!urlConnect) {
        throw new Error(
          "Please insert the tokenData variable into the .env file"
        );
      }

      await connect(
        process.env.tokenData, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        }
      );

      console.log("[DATABASE] - Connected to database");
    } catch (err) {
      console.error("[DATABASE] - " + err);
      process.exit(1);
    }
  }
};
