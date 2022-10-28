const { DataTypes } = require("sequelize");
const {DataTypes} = require("sequelize");

const db = require("../utils/database");



const Chats = db.define("chats", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageChat: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: false,
    field: "image_chat"
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  members: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  channel: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }

});

module.exports = Chats;