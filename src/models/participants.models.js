const {DataTypes} = require("sequelize");

const db = require("../utils/database");

const Participants = db.define("participants", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = Participants;