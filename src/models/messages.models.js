const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Chats = require("./chats.models");

const Users = require("./users.models");



const Messages = db.define("messages", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users
    }
  },
  chatId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "chat_id",
    references: {
      key: "id",
      model: Chats
    }
  }

});

module.exports = Messages; 