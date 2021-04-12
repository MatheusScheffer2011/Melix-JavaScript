const Discord = require('discord.js');

exports.run = async(bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('| Você não tem permissão para utilizar esse comando!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('| Você tem que mencionar alguém!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('| Este usuário não está no servidor!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Você não pode expulsar essa pessoa!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('| Você precisa me dar um motivo');

    var channel = msg.guild.channels.cache.find(c => c.id === '807236352000524308');

    var log = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Usuario Expulso')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('| Voce foi expulso! **Motivo**')
    .setDescription(reason);

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    member.kick(reason);

    msg.channel.send(`**${user}** Foi expulso por **${msg.author}**!`);
}