const Users = require("./users.models");

const Chats = require("./chats.models");

const Messages = require("./messages.models");

const Participants = require("./participants.models");



const initModels = () => {

  //Users 1:M Chats
  Users.hasMany(Chats);
  Chats.belongsTo(Users);

  //Users 1:M Messages
  Users.hasMany(Messages);
  Messages.belongsTo(Users);

  //Chats 1:M Messages
  Chats.hasMany(Messages);
  Messages.belongsTo(Chats);

  //Users 1:M Participants
  Users.hasMany(Participants);
  Participants.belongsTo(Users);

  //Chats 1:M Participants
  Chats.hasMany(Participants);
  Participants.belongsTo(Chats);
  
};

module.exports = initModels;