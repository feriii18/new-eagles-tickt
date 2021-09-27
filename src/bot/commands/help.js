module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["القني يابني"],

    run: async function(client, message, args) {
        try {
          message.channel.send({
            embed: {
              title: 'Bot Commands 💚',
              description: `
                            help
                            setup
                            open
                            add
                            remove
                            rename
                            prefix
                            ping
                        
                           `
            }
          })
        } catch (err) {
            return;
        }
    }
}
