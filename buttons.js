const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    introRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('introWell')
                    .setLabel(`I'm doing all right!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('introBad')
                    .setLabel(`I'm not doing so well.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    introYesRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('introYesYes')
                    .setLabel(`Yes please!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('introYesNo')
                    .setLabel(`No, let's skip that.`)
                    .setStyle(ButtonStyle.Primary)
            ),
    
    introNoRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('introContinue')
                    .setLabel(`Let's continue!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    physicalRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('physicalYes')
                    .setLabel(`Yes, something's uncomfortable.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('physicalNo')
                    .setLabel(`No, I'm okay.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    physicalYes1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('physicalYes1')
                    .setLabel(`Okay, I did that...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    physicalYes2Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('physicalYes2')
                    .setLabel(`Okay, done...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    physicalYes3Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('physicalYes3')
                    .setLabel(`Okay, I did my best...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    physicalContinueRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('physicalContinue')
                    .setLabel(`Keep going!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleYes')
                    .setLabel(`Yes, something's off.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('intangibleNo')
                    .setLabel(`No, I'm okay.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleYes1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleFocus')
                    .setLabel(`Yes, let's focus on it.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('intangibleDistract')
                    .setLabel(`No, let's distract.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleFocus1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleFocus1')
                    .setLabel(`Okay...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleFocus2Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleFocus2')
                    .setLabel(`Alright...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleFocus3Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleFocus3')
                    .setLabel(`Okay, I tried that...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleContinueRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleContinue')
                    .setLabel(`Okay, I'm ready to keep going!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleDistract1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleDistract1')
                    .setLabel(`Okay, I did that...`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleDistract2Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleDistract2Yes')
                    .setLabel(`I need more.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('intangibleDistract2No')
                    .setLabel(`Yes, that helped.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    intangibleDistract3Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('intangibleDistract3Yes')
                    .setLabel(`I still need more.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('intangibleDistract3No')
                    .setLabel(`Yes, that helped.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    drinkRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('drinkYes')
                    .setLabel(`Yes, I have!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('drinkNo')
                    .setLabel(`No, I haven't.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    drinkNoRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('drinkDone')
                    .setLabel(`Okay, I got something to drink!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    eatenRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('eatenYes')
                    .setLabel(`Yes, I have!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('eatenNo')
                    .setLabel(`No, I haven't.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    eatenNoRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('eatenDone')
                    .setLabel(`Okay, I've gotten some food.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('eatenLater')
                    .setLabel(`I'll get some food later.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    medicationRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('medicationNo')
                    .setLabel(`No, I'm okay.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('medicationYes')
                    .setLabel(`Yes, I need to take meds.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    medicationYesRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('medicationDone')
                    .setLabel(`Okay, I've taken meds.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    screenbreakRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('screenbreakYes')
                    .setLabel(`I've taken one recently!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('screenbreakNo')
                    .setLabel(`I haven't had one.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    screenbreakNoRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('screenbreakDone')
                    .setLabel(`Okay, I've taken a break!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    sleepRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sleepYes')
                    .setLabel(`Yes, I'm rested!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sleepNo')
                    .setLabel(`No, I'm tired.`)
                    .setStyle(ButtonStyle.Primary),
            ),
    
    sleepYesRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sleepContinue')
                    .setLabel(`Let's keep going!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    sleepNo1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sleepCant')
                    .setLabel(`No, I can't lay down.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sleepDone')
                    .setLabel(`Yes, I'll lay down!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    sleepNo2Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sleepNo2Done')
                    .setLabel(`Okay, I've rested/will rest later.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    friendsRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('friendsYes')
                    .setLabel(`Yes, I have!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('friendsNo')
                    .setLabel(`No, I haven't.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    friendsNo1Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('friendsNo1')
                    .setLabel(`No, I can't/don't want to.`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('friendsDone')
                    .setLabel(`Yes, I'll reach out!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    friendsNo2Row : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('friendsContinue')
                    .setLabel(`Okay, let's continue.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    funRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('funYes')
                    .setLabel(`Yes, I have!`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('funNo')
                    .setLabel(`No, I haven't.`)
                    .setStyle(ButtonStyle.Primary)
            ),

    funNoRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('funDone')
                    .setLabel(`Okay, I'll do something fun!`)
                    .setStyle(ButtonStyle.Primary)
            ),

    funYesRow : new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('funYesDone')
                    .setLabel(`Okay, I'm done!`)
                    .setStyle(ButtonStyle.Primary)
            ),
}