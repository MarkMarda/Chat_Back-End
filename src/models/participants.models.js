const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Chats = require("./chats.models");

const Users = require("./users.models");



const Participants = db.define("participants", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
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
    type: DataTypes.UUID,
    allowNull: false,
    field: "chat_id",
    references: {
      key: "id",
      model: Chats
    }
  }

});

module.exports = Participants;