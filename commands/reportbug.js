const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const hora = new Date();
  hora.setHours(hora.getHours() - 3);
  message.delete().catch(O_o => {});
  const reason = args.join(' ');
  if(!reason) return message.reply("Você precisa colocar o bug que você encontrou").then(msg => msg.delete({timeout: 5000}))

  //Mensagem na Log
  console.log(`
  =================================
   Novo Bug Reportado 
  
  Bug: ${reason}
  Reportado por: ${message.author.tag} ID: ${message.author.id}
  Hora: ${hora.getUTCHours()}:${hora.getUTCMinutes()}:${hora.getUTCSeconds()}
  =================================`);

  //Mensagem no Chat
  const embed = new Discord.MessageEmbed()
  .setTitle(`Bug Reportado`)
  .setColor([255,182,193])
  .setDescription(`Bug: ${reason}`)
  .setFooter(`Bug reportado por: ${message.author.tag} Nunca reporte so por experimentar, isso pode causar banimento!`)
  message.channel.send(embed);

  //Mensagem no Privado
  const privado = new Discord.MessageEmbed()
  .setTitle(`**Bug reportado**`)
  .setColor([255,182,193])
  .setDescription(`${message.author} Muito obrigado por nos reportar o bug **${reason}**, caso seja necessário nossa equipe entrara em contato com você!`)
  .setFooter(`Atenciosamente, **Nunca reporte só por experimentar**`)
  message.author.send(privado);
};