exports.run = function (client, message, args) {
  var dabs = ["https://i.imgur.com/CnTa8gj.png", "https://i.imgur.com/oj1gYeC.png", "https://i.imgur.com/7xErbTU.jpg", "https://i.imgur.com/DGpGBzp.jpg", "https://i.imgur.com/9xvdWVz.png", "https://i.imgur.com/qBN1bOA.jpg", "https://i.imgur.com/8KqBA6Z.png", "https://i.imgur.com/YckniFV.png", "https://i.imgur.com/SFs49XA.jpg", "https://i.imgur.com/tw5Fr8S.png", "https://i.imgur.com/NLcPnPy.jpg", "https://i.imgur.com/IqtOTZk.jpg", "https://i.imgur.com/f7G0yQ9.jpg", "https://i.imgur.com/HkDsPQY.jpg", "https://i.imgur.com/2SC5xnz.jpg",   "https://i.imgur.com/UP56PHN.jpg"];
        message.channel.send("Dab on the haters", {
        file: dabs[Math.floor(Math.random()*dabs.length)]
      });
      return;
};
