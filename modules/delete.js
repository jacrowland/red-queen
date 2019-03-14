exports.run = function(client, message, args) {
  //Permission Check
  if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
  //Validation checking for amount to delete
  if (isNaN(args[0]) == true) return message.channel.send("Please enter an amount (0 to 99) to delete!");
  else {
    //Deletes command message
    message.delete();
    //Status Message
    message.channel.send("🚮 Deleting " + args[0] + " messages...");
    //Deletes messages and status message (+1)
    message.channel.bulkDelete(parseInt(args[0]) + 1);
  }
  return;
}
