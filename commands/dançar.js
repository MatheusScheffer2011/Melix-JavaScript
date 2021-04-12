const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/759407391384535040/815377161815851048/b3d06257dcc37d548b40dd52ad401568.gif',
'https://cdn.discordapp.com/attachments/759407391384535040/815377140715225088/c0ab51658cc68a9650684005bdd22081.gif',
'https://cdn.discordapp.com/attachments/759407391384535040/815377113841795082/dd218dcbf38c0c1fb0ea8a005dd63c4.gif',
'https://cdn.discordapp.com/attachments/759407391384535040/815377075959496714/DancaDoPanda.gif',
'https://loritta.website/assets/img/actions/dance/male_x_male/gif_242.gif',
'https://loritta.website/assets/img/actions/dance/generic/gif_271.gif',
'https://loritta.website/assets/img/actions/dance/both/gif_229.gif',
'https://2.bp.blogspot.com/-CfuCj62wEPI/XNcqlSM7hNI/AAAAAAAAHnA/bt8ErlXS6f87-FbaTghL3UysQmn7JTBugCLcBGAs/s640/LightheartedTeemingGroundhog-size_restricted.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você precisa mencionar um usuário para dançar!');
}
/*
message.channel.send(`${message.author.username} **Deu um tapa em* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dança')
        .setColor('#000000')
        .setDescription(`${message.author} Dançou com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Tuti Tuti Tuti!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}