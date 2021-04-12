const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 'https://tenor.com/view/pokemon-lucario-pikachu-fight-gif-16544309',
'https://tenor.com/view/mega-lucario-fighting-pokemon-anime-attack-gif-17179431',
'https://loritta.website/assets/img/actions/attack/generic/gif_16.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_77.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_91.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_41.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_65.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_24.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_100.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_73.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_34.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_102.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_69.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_64.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_63.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_51.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_48.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_88.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_0.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_81.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_12.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_20.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_40.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_58.gif',
'https://loritta.website/assets/img/actions/attack/generic/gif_109.gif',
'https://images-ext-2.discordapp.net/external/x09iBpY4_QXndj9W7Xsf0yTxn-y2Ch3n5M2sEuRG5U0/https/loritta.website/assets/img/actions/attack/generic/gif_101.gif',
'https://images-ext-1.discordapp.net/external/BNzv1u91s0RA_l80wLK-09B35d5fHV2rH8mmmbe2uv4/https/loritta.website/assets/img/actions/attack/generic/gif_60.gif',
'https://images-ext-1.discordapp.net/external/1NEwFaThpPimv8E_zEtFR-Tsxl1lJiRpOQmrkVcp6U4/https/loritta.website/assets/img/actions/attack/generic/gif_107.gif',
'https://images-ext-2.discordapp.net/external/MXAP-C4m6n2F55dX5aSsjgw1XozREPV_UGPe6p4yhFI/https/loritta.website/assets/img/actions/attack/generic/gif_46.gif',
'https://images-ext-1.discordapp.net/external/wl6q3_NCri657asIKeXD1o0-QynkdMSnMA3vpHIxFZw/https/loritta.website/assets/img/actions/attack/generic/gif_59.gif',
'https://images-ext-2.discordapp.net/external/wB33ybBE3MTnAyVMNq07DOoojcZerThzMGGrgdNTr-w/https/loritta.website/assets/img/actions/attack/generic/gif_105.gif',
];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você precisa mencionar um usuário para atacar!');
}
/*
message.channel.send(`${message.author.username} **Deu um tapa em* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Atacar')
        .setColor('#000000')
        .setDescription(`${message.author} Atacou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Use m!atacar para se vingar deste usuário que teve coragem de te atacar')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}