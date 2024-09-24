module.exports = [
    {
        name: 'ping', // Command is triggered when someone types 'ping'
        description: 'Replies with Pong!',
        execute(message) {
            message.reply('Pong!');
        }
    },
    {
        name: 'hello', // Command is triggered when someone types 'hello'
        description: 'Says hello!',
        execute(message) {
            message.reply('Hello there!');
        }
    },
    {
        name: 'help', // Command is triggered when someone types 'help'
        description: 'Lists all commands.',
        execute(message) {
            const commandList = module.exports.map(command => command.name).join(', ');
            message.reply(`Available commands: ${commandList}`);
        }
    },
{
name: 'who is your developer', // Command is triggered when someone types 'hello'
        description: 'none',
        execute(message) {
            message.reply('DIVINE EMA ASUQUO.');
}
},
    // Add more commands as needed
];