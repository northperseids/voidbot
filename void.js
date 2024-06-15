// VOID BOT
// created by Néártsua (@neartsua) on Discord

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, Collection, Events, AttachmentBuilder } = require('discord.js');
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
    client.user.setActivity(`/pop in ${client.guilds.cache.size} servers`);
    console.log(`${c.user.tag} is ready!`)
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'information') {
        const info = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Hello! My name is Void.')
            .setDescription(
                `I am a Discord bot. You can tell me something so you don't have to hold onto it. (None of these messages are saved by the bot - you are yelling into the void, after all!)\n
            Nobody can see the bot usage except for you, so don't worry about that.\n
            For a list of my commands, type in /help !\n
            If you have any questions, contact @neartsua on discord.`
            )
        interaction.reply({ embeds: [info], ephemeral: true })
    }

    if (interaction.commandName === 'help') {
        const info = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Here are my available commands!')
            .setDescription(
                `/information: Gives information about me!\n
                /pop: I can give you a bit of bubble wrap for de-stressing.\n
                /self-care: I can give you a self-care task out of a list of over 40 tasks!\n
                /breathing: provides an animated breathing exercise\n
                /grounding: We can do a grounding exercise!\n
                /yelling: If you need to yell into the void!\n
                /say-something: If you feel like you need to say something into the void instead!\n
                Let me know if you need me!`
            )
        interaction.reply({ embeds: [info], ephemeral: true })
    }

    // --------- BREATHING
    if (interaction.commandName === 'breathing') {
        const file = new AttachmentBuilder('./resources/breathe.gif')
        const embed = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Here's something you can try!`)
            .setDescription(`Try to breathe along with this. Try to be even and steady, and aware of your surroundings.\n
                You can click "dismiss" when you're done!\n
                Let me know if you need me again!`)
            .setImage('attachment://breathe.gif')
        await interaction.reply({
            embeds: [embed],
            files: [file],
            ephemeral: true
        })
    }


    // --------- GROUNDING
    if (interaction.commandName === 'grounding') {

        // first set of see-hear-feel
        const see1 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Okay! Let's focus on what's around you.`)
            .setDescription(`Let's start slowly. Name one thing you can see!`)
        const hear1 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Nice!')
            .setDescription(`Can you name one thing you can hear?`)
        const feel1 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Good!')
            .setDescription(`Can you name one thing you can physically feel?`)

        // second set of see hear feel
        const see2 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Nicely done!`)
            .setDescription(`Now, name two things you can see!`)
        const hear2 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`You're doing well!`)
            .setDescription(`Can you name two things you can hear?`)
        const feel2 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Good!')
            .setDescription(`Can you name two things you can physically feel?`)

        // third set of see hear feel
        const see3 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Excellent!`)
            .setDescription(`Now, name *three* things you can see! (And you can't have said them already!)`)
        const hear3 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Awesome!`)
            .setDescription(`Can you name *three* things you can hear? (Same rules! You can't have said them already!)`)
        const feel3 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Keep going!')
            .setDescription(`And now, *three* things you can feel! (No repeats!)`)

        const see4 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Can you do it one more time?`)
            .setDescription(`Now, name *FOUR* things you can see!`)
        const hear4 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle(`Keep on going!`)
            .setDescription(`*FOUR* things you can hear!`)
        const feel4 = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Last one!')
            .setDescription(`*FOUR* things you can feel!`)

        const final = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('*Awesome!*')
            .setDescription(
                `You did really well! I hope that helped. If you feel you need to, you can do it again! (For an extra challenge, try not to repeat any things!)\n
                Even if you don't do it again, can you reach out to someone you trust right now? Or maybe journal? I think that's a good way to get thoughts out.\n
                If you want, I can give you a self-care task if you type in /self-care !\n
                Take a deeeeeep breath... and let it out. You're okay. You're in the present. Focus on your surroundings.\n
                Let me know if you need me again!`
            )

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okay')
                    .setLabel(`Okay...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okaydone')
                    .setLabel(`Okay, done...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('alright')
                    .setLabel(`All right...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okay2')
                    .setLabel(`Okay, did that...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row5 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okaydone2')
                    .setLabel(`Okay...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row6 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('alright2')
                    .setLabel(`Keep going...`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row7 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okay3')
                    .setLabel(`Yep...!`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row8 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okaydone3')
                    .setLabel(`I did that!`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row9 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('alright3')
                    .setLabel(`All right...!`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row10 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okay4')
                    .setLabel(`Okay!`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row11 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('okaydone4')
                    .setLabel(`I managed it!`)
                    .setStyle(ButtonStyle.Primary)
            )
        const row12 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('alright4')
                    .setLabel(`Okay, did that!`)
                    .setStyle(ButtonStyle.Primary)
            )


        // interaction response
        const response = await interaction.reply({
            embeds: [see1],
            components: [row1],
            ephemeral: true
        })

        const collector1 = response.createMessageComponentCollector({ time: 300000 })

        collector1.on('collect', async listen1 => {
            if (listen1.customId === 'okay') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [hear1], components: [row2], ephemeral: true })
            }
            if (listen1.customId === 'okaydone') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [feel1], components: [row3], ephemeral: true })
            }
            if (listen1.customId === 'alright') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [see2], components: [row4], ephemeral: true })
            }
            if (listen1.customId === 'okay2') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [hear2], components: [row5], ephemeral: true })
            }
            if (listen1.customId === 'okaydone2') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [feel2], components: [row6], ephemeral: true })
            }
            if (listen1.customId === 'alright2') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [see3], components: [row7], ephemeral: true })
            }
            if (listen1.customId === 'okay3') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [hear3], components: [row8], ephemeral: true })
            }
            if (listen1.customId === 'okaydone3') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [feel3], components: [row9], ephemeral: true })
            }
            if (listen1.customId === 'alright3') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [see4], components: [row10], ephemeral: true })
            }
            if (listen1.customId === 'okay4') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [hear4], components: [row11], ephemeral: true })
            }
            if (listen1.customId === 'okaydone4') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [feel4], components: [row12], ephemeral: true })
            }
            if (listen1.customId === 'alright4') {
                await listen1.deferUpdate();
                await listen1.editReply({ embeds: [final], components: [], ephemeral: true })
            }
        })

    }

    // ---------- YELLING
    if (interaction.commandName === 'yelling') {
        const yell = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Sometimes it feels good to just yell, huh.')
            .setDescription(
                `I hope that feels a bit better! Once you dismiss this message, it's gone!\n
            Let me know if you need me again!`
            )
        interaction.reply({ embeds: [yell], ephemeral: true })
    }

    if (interaction.commandName === 'say-something') {
        const say = interaction.options.get('say').value;
        const saysomething = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Okay. Thanks for telling me that.')
            .setDescription(
                `I'll echo it back to you, okay? \n
            ${say}\n
            Now, whenever you're ready, you can dismiss this message. I won't save it - nobody will be able to see it.\n
            Take a deep breath, and whenever you're ready, click the 'Dismiss message' option.\n
            Let me know if you need me again!`
            )
        interaction.reply({ embeds: [saysomething], ephemeral: true })
    }

    if (interaction.commandName === 'pop') {
        const saysomething = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Hey there!')
            .setDescription(
                `Here's some bubble wrap! Nobody else can see it - it's all yours! When you're done, click the 'Dismiss message' option.\n
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
