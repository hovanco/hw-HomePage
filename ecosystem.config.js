require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "HomePage",
      script: "./build/index.js",
      env: {
        PORT: process.env.PORT,
      },
    },
  ],
};
