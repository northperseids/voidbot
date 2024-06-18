// VOID BOT
// created by Néártsua (@neartsua) on Discord

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, Collection, Events, AttachmentBuilder } = require('discord.js');
const checkin = require('./checkin.js')
const buttons = require('./buttons.js')

const client = new Client({
    intents: [
        
    ]
})

client.on('ready', (c) => {
    client.user.setActivity(`/pop in ${client.guilds.cache.size} servers`);
    console.log(`${c.user.tag} is ready!`)
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // INFO
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

    // HELP TEXT
    if (interaction.commandName === 'help') {
        const info = new EmbedBuilder()
            .setColor("#000000")
            .setTitle('Here are my available commands!')
            .setDescription(
                `/information: Gives information about me!\n
                /pop: I can give you a bit of bubble wrap for de-stressing.\n
                /self-care: I can give you a self-care task out of a list of over 50 tasks!\n
                /breathing: We can do an animated breathing exercise.\n
                /grounding: We can do a grounding exercise!\n
                /yelling: If you need to yell into the void!\n
                /say-something: If you feel like you need to say something into the void instead!\n
                /checkin: We can go through a guided check-in to see how you're doing!\n
                Let me know if you need me!`
            )
        interaction.reply({ embeds: [info], ephemeral: true })
    }

    // BREATHING
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

    // GROUNDING
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

    // YELLING
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
            Take a deep breath, and whenever you're ready, click the 'Dismiss message' option to let it go.\n
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
            I've got over 50 tasks I can give you!\n
            ${unquoted}`
            )
        interaction.reply({ embeds: [selfcare], ephemeral: true })
    }

    if (interaction.commandName === 'checkin') {

        const response = await interaction.reply({
                embeds: [checkin.intro],
                components: [buttons.introRow],
                ephemeral: true
            })
        
        const collector = response.createMessageComponentCollector({ time: 900000 });

        var sleepAfter = false;
        var friendsAfter = false;
        var funAfter = false;
        var selfcareAfter = false;
        var selfcareItem = null;
        var eatenLater = false;
        var journalLater = false;

        collector.on('collect', async listen => {
            if (listen.customId === 'introWell') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.introYes], components: [buttons.introYesRow] })
            }
            if (listen.customId === 'introBad') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.introNo], components: [buttons.introNoRow] })
            }
            if (listen.customId === 'introYesNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.drink], components: [buttons.drinkRow] })
            }
            if (listen.customId === 'introYesYes' || listen.customId === 'introContinue') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physical], components: [buttons.physicalRow] })
            }
            if (listen.customId === 'physicalYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physicalYes1], components: [buttons.physicalYes1Row] })
            }
            if (listen.customId === 'physicalNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physicalContinue], components: [buttons.physicalContinueRow] })
            }
            if (listen.customId === 'physicalYes1') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physicalYes2], components: [buttons.physicalYes2Row] })
            }
            if (listen.customId === 'physicalYes2') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physicalYes3], components: [buttons.physicalYes3Row] })
            }
            if (listen.customId === 'physicalYes3') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.physicalYes4], components: [buttons.physicalContinueRow] })
            }
            if (listen.customId === 'physicalContinue') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangible], components: [buttons.intangibleRow] })
            }
            if (listen.customId === 'intangibleYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleYes1], components: [buttons.intangibleYes1Row] })
            }
            if (listen.customId === 'intangibleNo' || listen.customId === 'intangibleDistract2No' || listen.customId === 'intangibleDistract3No') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleContinue], components: [buttons.intangibleContinueRow] })
            }
            if (listen.customId === 'intangibleFocus') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleFocus1], components: [buttons.intangibleFocus1Row] })
            }
            if (listen.customId === 'intangibleFocus1') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleFocus2], components: [buttons.intangibleFocus2Row] })
            }
            if (listen.customId === 'intangibleFocus2') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleFocus3], components: [buttons.intangibleFocus3Row] })
            }
            if (listen.customId === 'intangibleFocus3') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleFocus4], components: [buttons.intangibleContinueRow] })
                journalLater = true;
            }
            if (listen.customId === 'intangibleDistract') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleDistract1], components: [buttons.intangibleDistract1Row] })
            }
            if (listen.customId === 'intangibleDistract1') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.intangibleDistract2], components: [buttons.intangibleDistract2Row] })
            }
            if (listen.customId === 'intangibleDistract2Yes') {
                const messages = require('./tasks.json')
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                const stringed = JSON.stringify(randomMessage, null, " ")
                const activity = stringed.slice(1, -1)

                const intangibleDistract3 = new EmbedBuilder()
                    .setColor("#000000")
                    .setTitle(`Let's find a distraction!`)
                    .setDescription(`Let's try a self-care activity instead. Here's one! (You can do the activity after the check-in if it'll take too long! I'll remind you of it later.)\n\n${activity}`)
                
                await listen.deferUpdate();
                await listen.editReply({ embeds: [intangibleDistract3], components: [buttons.intangibleDistract3Row] })
                selfcareAfter = true;
                selfcareItem = activity;
            }
            if (listen.customId === 'intangibleDistract3Yes') {
                const messages = require('./tasks.json')
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                const stringed = JSON.stringify(randomMessage, null, " ")
                const activity = stringed.slice(1, -1)

                const intangibleDistract4 = new EmbedBuilder()
                    .setColor("#000000")
                    .setTitle(`Let's find a distraction!`)
                    .setDescription(`Here's another one! (Remember, if it'll take too long, you can do the activity after we're done! I'll remind you of it later.)\n\n${activity}`)
                
                await listen.deferUpdate();
                await listen.editReply({ embeds: [intangibleDistract4], components: [buttons.intangibleDistract3Row] })
                selfcareAfter = true;
                selfcareItem = activity;
            }
            if (listen.customId === 'intangibleContinue') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.drink], components: [buttons.drinkRow] })
            }
            if (listen.customId === 'drinkYes' || listen.customId === 'drinkDone') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.eaten], components: [buttons.eatenRow] })
            }
            if (listen.customId === 'drinkNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.drinkNo], components: [buttons.drinkNoRow] })
            }
            if (listen.customId === 'eatenYes' || listen.customId === 'eatenDone') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.medication], components: [buttons.medicationRow] })
            }
            if (listen.customId === 'eatenLater') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.medication], components: [buttons.medicationRow] })
                eatenLater = true;
            }
            if (listen.customId === 'eatenNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.eatenNo], components: [buttons.eatenNoRow] })
            }
            if (listen.customId === 'medicationNo' || listen.customId === 'medicationDone') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.screenbreak], components: [buttons.screenbreakRow] })
            }
            if (listen.customId === 'medicationYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.medicationYes], components: [buttons.medicationYesRow] })
            }
            if (listen.customId === 'screenbreakNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.screenbreakNo], components: [buttons.screenbreakNoRow] })
            }
            if (listen.customId === 'screenbreakYes' || listen.customId === 'screenbreakDone') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.sleep], components: [buttons.sleepRow] })
            }
            if (listen.customId === 'sleepNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.sleepNo1], components: [buttons.sleepNo1Row] })
                sleepAfter = true;
            }
            if (listen.customId === 'sleepYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.sleepYes], components: [buttons.sleepYesRow] })
            }
            if (listen.customId === 'sleepContinue' || listen.customId === 'sleepDone' || listen.customId === 'sleepNo2Done') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.friends], components: [buttons.friendsRow] })
            }
            if (listen.customId === 'sleepCant') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.sleepNo2], components: [buttons.sleepNo2Row] })
            }
            if (listen.customId === 'friendsYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.friendsYes], components: [buttons.friendsNo2Row] })
            }
            if (listen.customId === 'friendsDone') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.friendsYes], components: [buttons.friendsNo2Row] })
                friendsAfter = true;
            }
            if (listen.customId === 'friendsNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.friendsNo1], components: [buttons.friendsNo1Row] })
            }
            if (listen.customId === 'friendsNo1') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.friendsNo2], components: [buttons.friendsNo2Row] })
            }
            if (listen.customId === 'friendsContinue') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.fun], components: [buttons.funRow] })
            }
            if (listen.customId === 'funNo') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.funNo], components: [buttons.funNoRow] })
                funAfter = true;
            }
            if (listen.customId === 'funDone' || listen.customId === 'funYes') {
                await listen.deferUpdate();
                await listen.editReply({ embeds: [checkin.funYes], components: [buttons.funYesRow] })
            }
            if (listen.customId === 'funYesDone') {

                const finish = new EmbedBuilder()
                    .setColor("#000000")
                    .setTitle(`You made it!`)

                var promises = [];
                var promiseString = '';
                var selfcarereminder = '';
                var count = 0;
                var breakdown = '';
                
                if (sleepAfter === true) {
                    promises.push(`\n- Please get some rest! (Remember, laying down helps, even if you don't actually sleep!)`)
                    count += 1
                }
                if (friendsAfter === true) {
                    promises.push('Reach out to a friend! (Just a "hello!" to get a conversation started is fine!)')
                    count +=1
                }
                if (funAfter === true) {
                    promises.push("Remember to do something fun!")
                    count += 1
                }
                if (eatenLater === true) {
                    promises.push('Please remember to eat something!')
                    count += 1
                }
                if (journalLater === true) {
                    promises.push("I also think journaling about what you're feeling is a good idea.")
                    count += 1
                }
                if (selfcareAfter === true) {
                    selfcarereminder = `\n\nI also suggested you do this! ${selfcareItem}`
                    count += 1
                }
                if (count > 4) {
                    breakdown = '\n\nI know that may sound like a lot to do. Take a deep breath - you can do this!\nTake it one step at a time!'
                }

                if (promises.length > 0) {
                    let promiseJoined = promises.join('\n- ')
                    promiseString = `Here's a few reminders!\n${promiseJoined}`
                } else {
                    promiseString = `We're all done!`
                }

                finish.setDescription(`I hope you're feeling a bit better now.\n\n${promiseString}${selfcarereminder}${breakdown}\n\nThank you for checking in with me! Let me know if you need me again!`)

                await listen.deferUpdate();
                await listen.editReply({ embeds: [finish], components: [] })
            }

        })
    }

})

client.login(process.env.TOKEN);
