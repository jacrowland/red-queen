//Coinflip Command
exports.run = function (client, message, args) {
  var result;
  var coin = Math.floor(Math.random() * 2) + 1;
  if (coin == 1) {
    result = "Tails!";
  }
  else if (coin == 2) {
    result = "Heads!";
  }
    return message.channel.send(result);
};
