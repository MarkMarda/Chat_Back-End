const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Users = require("./users.models");



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
    allowNull: false,
    defaultValue: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  members: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    defaultValue: false
  },
  channel: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users
    }
  }

});

module.exports = Chats;