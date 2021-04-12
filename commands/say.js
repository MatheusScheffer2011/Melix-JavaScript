const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "🚨 | Você precisa da permissão **GERENCIAR MENSAGENS** para executar esse comando!"
    );

  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage)
  message.channel.send(`
  *Comando usado por: ${message.author}*`);
};