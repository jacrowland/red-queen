exports.run = function (bot, message, args) {
    message.delete();
    var statement = message.toString()
    let repeatedStatement = statement.substring(6);
    return message.channel.send(repeatedStatement);
};
