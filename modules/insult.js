//Insults Command
exports.run = function (client, message, args) {
  var adjectives = ["homeless", "mentally-challenged", "gaping", "smelly", "blind", "naive", "borderline disabled", "stupid", "dysfunctional", "deceitful", "daft", "repugnant", "vapid", "grotesque", "clammy", "brazen"];
  var nouns = ["whore", "douchebag", "heal-slut", "jackanape", "nincompoop", "clown", "shit", "cunt", "idiot", "nicholas", "furry", "lowlife", "dipstick", "asshole", "dunce", "cretin", "chicken", "deadbeat", "dweeb", "freak", "git", "nerd", "psycho", "smart-ass"];
  if (args[0] == null) {
    var insultString = message.author.toString() + " is a " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + ".";
  }
  else {
    var insultString = args[0] + " is a " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + ".";
  }
    message.delete();
    return message.channel.send(insultString);
};
