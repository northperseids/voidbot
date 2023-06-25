require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, SlashCommandBuilder } = require('discord.js');

const commands = [];

const info = new SlashCommandBuilder()
    .setName('information')
    .setDescription('Gives info about the bot!')

const help = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Gives a list of all available commands!')

const pop = new SlashCommandBuilder()
    .setName('pop')
    .setDescription('Need some bubble wrap?')

const selfcare = new SlashCommandBuilder()
    .setName('self-care')
    .setDescription('Gives a random self-care task!')

const yelling = new SlashCommandBuilder()
    .setName('yelling')
    .setDescription('Yell into the void.')
    .addStringOption(
        option =>
            option.setName('yell')
                .setDescription('Yell something, okay?')
                .setRequired(true)
    )

const say = new SlashCommandBuilder()
    .setName('say-something')
    .setDescription('Say something into the void.')
    .addStringOption(
        option =>
            option.setName('say')
                .setDescription('What would you like to say?')
                .setRequired(true)
    )

const breathing = new SlashCommandBuilder()
    .setName('breathing')
    .setDescription(`Let's do a breathing exercise!`)

const grounding = new SlashCommandBuilder()
    .setName('grounding')
    .setDescription(`Let's do some grounding!`)

commands.push(
    info.toJSON(),
    help.toJSON(),
    pop.toJSON(),
    selfcare.toJSON(),
    yelling.toJSON(),
    say.toJSON(),
    breathing.toJSON(),
    grounding.toJSON()
);

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering commands...')
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        )
        console.log('Commands registered!')
    } catch (error) {
        console.log(error);
    }
})();
