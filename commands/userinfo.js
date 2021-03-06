const { MessageEmbed } = require('discord.js');

exports.run = async (bot, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "Online";
                break;
            case "np":
                status = "Não perturbe";
                break;
            case "idle":
                status = "Ausente";
                break;
            case "offline":
                status = "Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Info`)
            .setColor(`#6400b6`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome: ",
                    value: user.user.username,
                },
                {
                    name: "Tag: ",
                    value: `#${user.user.discriminator}`,
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status: ",
                    value: status,
                },
                {
                    name: "Status personalizado: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O usuário não está fazendo nada!`,
                },
                {
                    name: 'Foto de perfil : ',
                    value: `[Clique Aqui para baixar!](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Conta criada no dia: ',
                    value: user.user.createdAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'Entrou aqui em: ',
                    value: user.joinedAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'Seus cargos: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                }
            )
            
        await message.channel.send(embed)
    }

