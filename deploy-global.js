require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'information',
        description: 'Gives info about the bot!'
    },
    {
        name: 'yelling',
        description: 'Yell into the void.',
        options: [{
            name: 'yell',
            description: 'Yell something, okay?',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ]
    },
    {
        name: 'say-something',
        description: 'Say something into the void.',
        options: [{
            name: 'say',
            description: 'What would you like to say?',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ]
    },
    {
        name: 'pop',
        description: 'Need some bubble wrap?',
    },
    {
        name: 'self-care',
        description: 'Gives a random self-care task!',
    }
];


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