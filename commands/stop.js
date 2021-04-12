const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const ffbinaries = require('ffbinaries');
const ffbinaries_extra = require('ffbinaries-extra');
const ffmpeg = require('ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const opusscript = require('opusscript');
const pesquisa = require('yt-search')


exports.run = async (client, message, args) => {

        message.guild.me.voice.channel.leave();
    const stop = new Discord.MessageEmbed()
         .setTitle(`❌ **STOP** ❌`)
         .setDescription(`**Música parada!**`)
         .setColor('RANDOM')
    message.channel.send(stop)

}