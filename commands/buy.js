const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do item que você deseja adquirir')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'Bola'){
            if(amount < 2000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 2000);
            db.push(message.author.id, "Bola");
            message.channel.send('Você comprou uma **Bola** com sucesso!')
        }
            if(purchase === 'Celular'){
            if(amount < 5000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "Celular");
            message.channel.send('Você comprou seu **Celular** com sucesso!')
        }
            if(purchase === 'PC'){
            if(amount < 10000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
            db.push(message.author.id, "PC");
            message.channel.send('Você comprou seu *PC** com sucesso!')
        }
           if(purchase === 'ak-45'){
            if(amount < 5000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "ak-45");
            message.channel.send('Você comprou sua **ak-45** com sucesso!')
        }
            if(purchase === 'mp-5'){
            if(amount < 10000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
            db.push(message.author.id, "mp-5");
            message.channel.send('Você comprou sua **mp-5** com sucesso!')
        }
            if(purchase === 'Vector'){
            if(amount < 15000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 15000);
            db.push(message.author.id, "Vector");
            message.channel.send('Você comprou sua **Vector** com sucesso!')
        }
            if(purchase === 'Fusca'){
            if(amount < 3000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 3000);
            db.push(message.author.id, "Fusca");
            message.channel.send('Você comprou seu **Fusca** com sucesso! Lembre-se, se beber não diriga!')
        }
            if(purchase === 'HB20'){
            if(amount < 7000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 7000);
            db.push(message.author.id, "HB20");
            message.channel.send('Você comprou seu **HB20** com sucesso! Lembre-se, se beber não diriga!')
        }
            if(purchase === 'Camaro'){
            if(amount < 15000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 15000);
            db.push(message.author.id, "Camaro");
            message.channel.send('Você comprou seu **Camaro** com sucesso! Lembre-se, se beber não diriga!')
        }
            if(purchase === 'Metralhadora'){
            if(amount < 22000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 22000);
            db.push(message.author.id, "Metralhadora");
            message.channel.send('Você comprou sua **Metralhadora** com sucesso!')
        }
            if(purchase === 'Nissan'){
            if(amount < 20000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 20000);
            db.push(message.author.id, "Nissan");
            message.channel.send('Você comprou seu **Nissan** com sucesso! Lembre-se, se beber  não diriga!')
        }
            if(purchase === 'PlayStation 5'){
            if(amount < 23000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 23000);
            db.push(message.author.id, "PlayStation 5");
            message.channel.send('Você comprou seu **PlayStation 5** com sucesso!')
        }
            if(purchase === 'Death Note'){
            if(amount < 7000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 7000);
            db.push(message.author.id, "Death Note");
            message.channel.send('Você comprou seu **Death Note** com sucesso!')
        }
            if(purchase === 'Camionete'){
            if(amount < 10000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
            db.push(message.author.id, "Camionete");
            message.channel.send('Você comprou sua **Camionete** com sucesso!')
        }
            if(purchase === 'Pistola'){
            if(amount < 3000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 3000);
            db.push(message.author.id, "Bola");
            message.channel.send('Você comprou uma **Pistola** com sucesso!')
        }
    }