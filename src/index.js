import { Client } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config()

const client = new Client({
    intents: ['Guilds', 'GuildMessages']
})

client.login(process.env.DISCORD_TOKEN)