const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("8 Ticket")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready"));

    await client.user.setActivity("𝐄𝐀𝐆𝐋𝐄𝐒 𝐓𝐈𝐂𝐊𝐄𝐓");
    await client.user.setStatus("idle");
}