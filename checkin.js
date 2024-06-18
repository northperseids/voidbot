const {EmbedBuilder} = require('discord.js')

module.exports = {
    intro : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Hello!`)
    .setDescription(`This will be a short guided check-in! (A quick note: Discord won't let me reply to you after 15 minutes. If the guided check-in takes too long, you can always run the command again!)\n\nFirst things first! How are you doing right now?`),

    introYes : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`I'm glad to hear that!`)
    .setDescription(`Do you want to walk through the first part anyway?`),

    introNo : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`I'm sorry to hear that.`)
    .setDescription(`Let's go through some basic steps to try to help.`),

    physical : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus on the physical first.`)
    .setDescription(`Are you feeling any physical discomfort right now? In pain, irritated, strained?`),

    physicalYes1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's address that.`)
    .setDescription(`Are you sitting comfortably? If not, go ahead and adjust how you're sitting.`),

    physicalYes2 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's address that.`)
    .setDescription(`Are your clothes uncomfortable? If so, change into something more comfortable.`),

    physicalYes3 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's address that.`)
    .setDescription(`Are you in pain? If so, is there anything you can do to relieve it? (Heat, ice packs, medication if you have it, or even just taking a deep breath and relaxing your muscles can help.)`),
    
    physicalYes4 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Good!`)
    .setDescription(`Hopefully you're more comfortable. Let's continue.`),

    physicalContinue : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Good!`)
    .setDescription(`Let's continue.`),

    intangible : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus on the intangible for a moment.`)
    .setDescription(`Are you feeling any mental or emotional discomfort?`),

    intangibleYes1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Okay, we can work with that.`)
    .setDescription(`Do you want to focus on the feeling, or try to distract from it?`),

    intangibleFocus1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus, then.`)
    .setDescription(`Take a deep breath. Don't try to tackle everything at once!\n\nFocus on your body and how this feeling is manifesting. Are you tense anywhere? Do you know why? Try to relax that part of your body.`),

    intangibleFocus2 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus, then.`)
    .setDescription(`Now focus on what the feeling *is.* Can you name it or describe it? Imagine you're telling me.`),

    intangibleFocus3 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus, then.`)
    .setDescription(`Okay. Is there anything you can think of that can help this feeling? A few examples are:\n- making a plan about it\n- meditate on it\n- breathing exercises (I can help with one if you type in /breathing!)\n- go for a walk\n- make yourself a cup of tea\n\nThese things are going to vary from person to person, so it's okay if you think of something that's not on this list!`),

    intangibleFocus4 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's focus, then.`)
    .setDescription(`Now, take some time to reflect. Maybe journal about it when we're done. (Don't worry, I'll remind you!)\n\nWhenever you're ready, let's continue!`),

    intangibleDistract1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's find a distraction!`)
    .setDescription(`Find something nearby - a small object or something - and observe it for a moment. Imagine you're telling me all about it, but don't mention its name! Describe it for me instead. Focus on how it feels, the weight of it, the texture, the colors, the shape.`),

    intangibleDistract2 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's find a distraction!`)
    .setDescription(`That's a mindfulness exercise! Did that help? (It's okay if the answer is no!)`),

    intangibleContinue : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`I'm glad to hear it!`)
    .setDescription(`Let's continue.`),

    drink : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Excellent!`)
    .setDescription(`Let's keep going!\n\nHave you had anything to drink?`),

    drinkNo : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's get something to drink, then.`)
    .setDescription(`Get a glass of something nice to drink! Ideally water, but it doesn't *have* to be!`),

    eaten : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Good!`)
    .setDescription(`Now, have you eaten anything recently?`),

    eatenNo : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's get some food, then.`)
    .setDescription(`Go ahead and get something to eat.\n\nJust remember, something is better than nothing. Eating is a necessary thing!\n\nTry to pick a food you enjoy!\n\nYou can also get some food later. (I'll remind you when we're done!)`),

    medication : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's go through a few things.`)
    .setDescription(`Is there any medication you need to take?`),

    medicationYes : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's take meds, then.`)
    .setDescription(`Go ahead and take what medications you need right now!`),

    screenbreak : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Okay, you're doing great!`)
    .setDescription(`Have you taken a break from screens lately? Looking at screens too long at one time can cause a lot of strain!`),

    screenbreakNo : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's take a break for a little!`)
    .setDescription(`Take a moment to do something else. Take a quick walk around your room or your house, or even just close your eyes for a minute or two - just something you find calming that doesn't involve a screen!`),

    sleep : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Awesome!`)
    .setDescription(`How tired are you? Have you had enough sleep lately?`),

    sleepYes : new EmbedBuilder()
    .setColor("#000000")
    .setTitle('Glad to hear it!')
    .setDescription(`Sleep is really important for our health.`),

    sleepNo1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's rest for a moment.`)
    .setDescription(`Can you lay down for a bit? Even if you don't actually sleep, laying down for a period of time still helps a lot!\n\nYou can lay down for a moment after we're done checking in, too, if you think you need to lay down for longer! I'll remind you when we're done.`),

    sleepNo2 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's try something else to rest.`)
    .setDescription(`Let's just close our eyes for a moment. Try to listen to your surroundings and pay attention to how your body feels. Make sure you're comfortable and just take a few nice, deep breaths!`),

    friends : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Okay, let's keep going!`)
    .setDescription(`Have you made time to reach out to friends lately?`),

    friendsYes : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Excellent!`)
    .setDescription(`Talking to friends can really help boost your mood.`),

    friendsNo1 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Let's take a moment to reach out.`)
    .setDescription(`Can you send a message or make a phone call to a friend? Just a "hello!" is fine to get a conversation started!\n\nYou can also do this afterward. (Don't worry, I'll remind you when we're done.)`),

    friendsNo2 : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`That's fine, too.`)
    .setDescription(`Sometimes we just don't feel like talking.\n\nBe sure to reach out if you need to, though. You deserve to have a good social support network!`),

    fun : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`We're almost done!`)
    .setDescription(`Have you done anything for fun lately? (Just for fun! Nothing you're *obligated* to do!)`),

    funNo : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Think about it!`)
    .setDescription(`What can you do for fun today? Something with no stress.\n\nTake some time after we're done to go do something *fun!*`),

    funYes : new EmbedBuilder()
    .setColor("#000000")
    .setTitle(`Awesome!`)
    .setDescription(`Having fun is really important to our health, too.`)

}