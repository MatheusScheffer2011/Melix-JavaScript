const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply("Você precisa escolher entre **Cara** Ou **Coroa**");
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("Deu **" + array1[rand] + "**, Parabéns por ganhar");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("Deu **" + array1[rand] + "**, Dessa vez não deu amigo"
    );
  }
};