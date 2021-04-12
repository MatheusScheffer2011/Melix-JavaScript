const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Você precisa da permissão 'gerenciar servidor' para este comando.`)

  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Marque um bot para Reprovar');
} 
  let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa dar um motivo por favor!');
if(!require('quick.db').get(`${message.guild.id}_repro`))return message.reply('esse servidor não esta configurado ainda!')
if(!message.guild.channels.cache.get(require('quick.db').get(`${message.guild.id}_repro`)))return message.reply('esse servidor não esta configurado ainda!')
    var canal = client.channels.cache.get(require('quick.db').get(`${message.guild.id}_repro`))
    const embed = new Discord.MessageEmbed()
            .setColor('#00000')
            .setTitle('\`Seu Bot foi Reprovado\`')
            .setDescription(`**🤖┋Bot:** ${user}

            **👮‍♂️┋Reprovadorr:** ${message.author}

            **❓┋Motivo:** \`${motivo}\` `)
            .setImage('https://pa1.narvii.com/6505/666b1a17342cdb41aa6847f4eeb3d62d09163029_hq.gif')
            .setFooter(`Para adicionar um bot use m!addbot <ID> <PREFIX> <LINGUA>`)
            canal.send(embed)
    await message.channel.send(`**${message.author} Reprovado com sucesso**`)
}