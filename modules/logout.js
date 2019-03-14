const config = require("../config.json");
exports.run = function(client, message, args) {
  //Permission Check
  if(!message.member.id == config.ownerID) return;
  client.destroy(config.token);
  return;
}
