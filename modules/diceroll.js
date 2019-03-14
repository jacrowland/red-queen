exports.run = function(client, message, args) {
  if (args[0] == undefined) {
    var result = Math.floor(Math.random() * 6) + 1;
  }
  else {
    var result = Math.floor(Math.random() * args[0]) + 1;
  }
  return message.channel.send("🎲" + result);
}
