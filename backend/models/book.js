const { DataTypes } = require('sequelize');
const database = require("../database/connect");


const Book = database.sequelize.define('Book', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  year: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING,
  },
  isbn: {
    type: DataTypes.STRING
}
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
module.exports= Book;