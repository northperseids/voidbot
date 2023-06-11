// VOID BOT
// created by Néártsua (@neartsua) on Discord
// No license granted. Please contact @neartsua.

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
})

client.on('ready', (c) => {
    client.user.setActivity(`Popping bubble wrap in ${client.guilds.cache.size} servers`);
    console.log(`${c.user.tag} is ready!`)
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'information') {
        const info = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Hello! My name is Void.')
            .setDescription(
                `I am a Discord bot. You can tell me something\n
            so you don't have to hold onto it. (None of these \n
            messages are saved by the bot - you are yelling into\n
            the void, after all!)\n
            Nobody can see the bot usage except for you, so don't\n
            worry about that.\n
            If you have any questions, contact @neartsua on discord.`
            )
        interaction.reply({ embeds: [info], ephemeral: true })
    }

    if (interaction.commandName === 'yelling') {
        const response = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Sometimes it feels good to just yell, huh.')
            .setDescription(
                `I hope that feels a bit better! Once you dismiss\n
            this message, it's gone!\n
            Let me know if you need me again!`
            )
        interaction.reply({ embeds: [response], ephemeral: true })
    }

    if (interaction.commandName === 'say-something') {
        const say = interaction.options.get('say').value;
        const saysomething = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Okay. Thanks for telling me that.')
            .setDescription(
                `I'll echo it back to you, okay? \n
            ${say}\n
            Now, whenever you're ready, you can dismiss this\n
            message. I won't save it - nobody will be able to\n
            see it.\n
            Take a deep breath, and whenever you're ready, click\n
            the 'Dismiss message' option.\n
            Let me know if you need me again!`
            )
        interaction.reply({ embeds: [saysomething], ephemeral: true })
    }

    if (interaction.commandName === 'pop') {
        const saysomething = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Hey there!')
            .setDescription(
                `Here's some bubble wrap! Nobody else can\n
            see it - it's all yours! When you're done,\n
            click the 'Dismiss message' option.\n
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||
            ||pop||||pop||||pop||||pop||||pop||||pop||||pop||`
            )
        interaction.reply({ embeds: [saysomething], ephemeral: true })
    }

    if (interaction.commandName === 'self-care') {
        const messages = require('./tasks.json')
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const stringed = JSON.stringify(randomMessage, null, " ")
        const unquoted = stringed.slice(1, -1)
        const selfcare = new EmbedBuilder()
        .setColor("#000000")
        .setTitle(`Here's something you can try!`)
        .setDescription(
            `If you need another one, just let me know!\n
            I've got over 40 tasks I can give you!\n
            ${unquoted}`
        )
        interaction.reply({ embeds: [selfcare], ephemeral: true })
    }

})

client.login(process.env.TOKEN);
