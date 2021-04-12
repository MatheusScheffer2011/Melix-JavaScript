const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/84/8b/ce/848bce754d3bb524c1e71a781fdb71c4.gif',
  'https://media.tenor.com/images/6dbd997e3e79f21b7841b244833325c0/tenor.gif',
  'https://i.pinimg.com/originals/a5/9d/f3/a59df307e6bb26c6c0f1d726675ee934.gif',
  'https://i.imgflip.com/byooq.gif',
  'https://j.gifs.com/mlaWAO.gif',
  'https://media.tenor.com/images/15605581b37b757016bc0ff441617b54/tenor.gif',
  'https://media1.tenor.com/images/0cdae41362d61073f6322f31f8061e9a/tenor.gif?itemid=15133965',
  'https://images-ext-2.discordapp.net/external/9dHXgoYojdRgPpJ5LHqCZZLP1v-IvI_ZQQWzAbUgr80/https/media.tenor.com/images/aeaec66b78ccbe8e4cf9b019a1504b60/tenor.gif',
'https://images-ext-1.discordapp.net/external/7-xnb51VCwkLtJINZtGkOLSQJrXSFt9pKGMfz7LRICQ/https/loritta.website/assets/img/actions/slap/female_x_male/gif_212.gif',
'https://images-ext-1.discordapp.net/external/bam7BYtymNrG9LI4GjB0MeQHgn-SH2SFrmzpPaluT78/https/loritta.website/assets/img/actions/slap/male_x_female/gif_190.gif',
'https://images-ext-1.discordapp.net/external/z0eWv9g72Qh2jXJREwwsshSWJYXNa04F-nETKgGUdQ8/https/loritta.website/assets/img/actions/slap/female_x_female/gif_205.gif?width=500&height=281',
'https://images-ext-1.discordapp.net/external/En0iLNOx_DG4qf2vUt8wpT6GtRF9uVjyz-XpP8UeNPY/https/loritta.website/assets/img/actions/slap/female_x_male/gif_213.gif?width=500&height=282',
'https://images-ext-1.discordapp.net/external/GyRRN7zkSC9v1I4SUvYf-tYg52NLbXMymdNyBUnFKmA/https/loritta.website/assets/img/actions/slap/female_x_male/gif_215.gif',
'https://images-ext-2.discordapp.net/external/o_VTKmq2-dBhxgw7-rlEh7Q39nfG75K98l_UDnHuMdI/https/loritta.website/assets/img/actions/slap/female_x_female/gif_204.gif',
'https://images-ext-2.discordapp.net/external/o_faKUTZHuajYGpjDw4TrJ0Lmd9AdA8WHBJF419MjEs/https/loritta.website/assets/img/actions/slap/female_x_female/gif_207.gif',
'https://images-ext-1.discordapp.net/external/_E_Qnw6lHFL0WYVZCITagVtIMBg7Ou2jZq9KEDCSe1A/https/loritta.website/assets/img/actions/slap/female_x_male/gif_208.gif',
'https://images-ext-1.discordapp.net/external/4zIGNFE65odmzGOHvviIvMCrmOmUhpsSFgomAFRdjds/https/loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
'https://images-ext-2.discordapp.net/external/e2rZgHETtF9NY2aPddAzaRAuzyzMIKESuuvLg1yrRjk/https/loritta.website/assets/img/actions/slap/male_x_female/gif_188.gif',
'https://images-ext-1.discordapp.net/external/pnFcnaXmhnAc1xWwAbf97VSuB-WXB3xTlVnNZfQ0614/https/loritta.website/assets/img/actions/slap/generic/gif_228.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você precisa mencionar um usuário para dar o tapa!');
}
/*
message.channel.send(`${message.author.username} **Deu um tapa em* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('#000000')
        .setDescription(`${message.author} Deu um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Não sei se foi uma boa idéia usar este comando!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}