const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: [Partials.Channel]
});

// BOT READY
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// AUTO REPLY SYSTEM
client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const msg = message.content.toLowerCase();

    if (msg.includes("hello")) {
        message.reply("👋 Hello! Please create a ticket for support.");
    }

    if (msg.includes("price")) {
        message.reply("💰 Please open a ticket to view our price list.");
    }

    if (msg.includes("boost")) {
        message.reply("🚀 Boosting service available. Please open a ticket.");
    }
});

// LOGIN BOT
client.login(process.env.TOKEN);
