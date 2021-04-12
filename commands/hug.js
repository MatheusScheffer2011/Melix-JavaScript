const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
'https://images-ext-1.discordapp.net/external/zoz_eHNvudeLHvd7tlR5hgiXb-zu2jTBgHxf2HJzWmc/https/loritta.website/assets/img/actions/hug/female_x_female/gif_133.gif',
'https://images-ext-1.discordapp.net/external/Kz4-KrDw-pazGbTLzb4nsT88rfbXIdomPzWrRGWmOTk/https/loritta.website/assets/img/actions/hug/female_x_female/gif_134.gif?width=500&height=246',
'https://images-ext-2.discordapp.net/external/UIu3d9TirYzPVhK-pSEdeGYB4gYKS10klARf5vSV12I/https/loritta.website/assets/img/actions/hug/male_x_male/gif_128.gif',
'https://images-ext-2.discordapp.net/external/xSg5k011llAeqT52sxKgWM7zYAPSpDDYXFuDWdzEECw/https/loritta.website/assets/img/actions/hug/female_x_male/gif_158.gif',
'https://images-ext-1.discordapp.net/external/9Tywqa7HsbZdZZrkWRTeTDI0UlEfD3ZCiJna0WjnnDQ/https/loritta.website/assets/img/actions/hug/female_x_female/gif_146.gif',
'https://images-ext-2.discordapp.net/external/Q_4kYIBt278zFgHNxvtv4vDgWC12KyZIVYCwhv-aZPs/https/loritta.website/assets/img/actions/hug/female_x_male/gif_157.gif',
'https://images-ext-1.discordapp.net/external/XhwEqWBHrdRYrD2OKML-7PeWh_3McLbWqNIhtv6evww/https/loritta.website/assets/img/actions/hug/male_x_female/gif_122.gif',
'https://images-ext-1.discordapp.net/external/qZ5s_hsI8-hYaiowkIw1cpXBrWY1AfWUlUG7QM7hR1U/https/loritta.website/assets/img/actions/hug/generic/gif_171.gif',
'https://images-ext-1.discordapp.net/external/-4juZ8PH_wYvZHD5rEV_v1DtY18jpfqb4YncV1I1WbU/https/loritta.website/assets/img/actions/hug/male_x_female/gif_123.gif?width=500&height=247',
'https://images-ext-2.discordapp.net/external/cnEih3yJkUI_7xzeyLoX6XJivjkk40oRtNeWcXq82IE/https/loritta.website/assets/img/actions/hug/female_x_female/gif_136.gif',
'https://images-ext-1.discordapp.net/external/Y21bMEyTeuMVVoL2aoJN36UIAZDdYKiKEzt1mR-Bx2g/https/loritta.website/assets/img/actions/hug/female_x_female/gif_139.gif?width=500&height=246',
'https://images-ext-2.discordapp.net/external/JLH2JKl9aS20zUAk4q4JKY1iIwMpSFVI4cvjPTu8SOE/https/loritta.website/assets/img/actions/hug/male_x_female/gif_121.gif',
'https://images-ext-1.discordapp.net/external/pwAi5N2-s82_9n0Ifk7cLBNkQbCT8CyYVisB8dJbiFQ/https/i.some-random-api.ml/zSKMG85bIg.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você deve mencionar alguém para abraçar!');
}
/*
message.channel.send(`${message.author.username} **Deu um tapa em* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#000000')
        .setDescription(`${message.author} Abraçou o ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Abraço de amigos!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}