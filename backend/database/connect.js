const Sequelize = require("sequelize");

let sequelize = new Sequelize("plural", "postgres", "Sundance12", {
  host: "localhost",
  dialect: "postgres",
});

function connect() {
  try {
    sequelize.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.log("No connection ", error);
  }
}
module.exports = {
  sequelize,
  connect,
};
