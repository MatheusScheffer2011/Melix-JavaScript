const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  message.delete();
  
  let roles = message.guild.roles.cache.map(a => a.name)
  
  let humans = message.guild.members.cache.filter(m => !m.user.bot).size;
  
  let bots = message.guild.members.cache.filter(m => m.user.bot).size;
  
  let icon = message.guild.iconURL;
  
  const sinfoembed = new Discord.MessageEmbed()
  .setTitle(`Server info ${message.guild.name}`)
  .setColor("ff0000")
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .setFooter(`Requisitado Por ${message.author.tag}`, message.author.displayAvatarURL())
  .addField(`Dono:`, `**User** ${message.guild.owner}\n**ID** ${message.guild.ownerID}`, true)
  .addField(`Região`, message.guild.region.toUpperCase())
  .addField(`Criado dia:`, `${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")} (${ms(Date.now()- message.guild.createdAt, {long: true})})`)
  .addField("Contador", `**Cargos** ${message.guild.roles.cache.size -1}\n**Emojis** ${message.guild.emojis.cache.size}\n**Canais** ${message.guild.channels.cache.size}`)
  .addField(`Contador de Membros`, `**Total** ${message.guild.memberCount}\n**Humanos** ${humans}\n**Bots** ${bots}`, true)
  
  message.channel.send(sinfoembed).then(msg => {
    
    msg.react("🔨");
    
    const filtro = (reacao, usuario) => reacao.emoji.name === "🔨" && usuario.id === message.author.id;

const coletor = msg.createReactionCollector(filtro);

coletor.on("collect", () => {
  
  let role = new Discord.MessageEmbed()
  .setTitle("Cargos Do Servidor")
  .setDescription(`${roles}`.substring(0, 1020))
  .setColor("ff0000")
  msg.edit(role)
})
  })
}