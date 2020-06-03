exports.commands = {
  help: HelpCommand,
  reload: ReloadCommand,
  terminate: KillCommand
};

function HelpCommand(botClient, message) {
  message.channel.send(`Commands: ${Object.keys(botClient.commands).sort().join(', ')}`);
}

function ReloadCommand(botClient, message) {
  if (!botClient.IsBotAdmin(message.member)) {
    message.channel.send(`Sorry you do not have permission to reload.`)
    return;
  }
  botClient.LoadConfig();
  message.channel.send("Reload complete.");
}

function KillCommand(botClient, message) {
  if (!botClient.IsBotAdmin(message.member)) {
    message.channel.send(`:no_entry: Sorry you do not have permission to do that. I live on.`)
    return;
  }
  console.warn(`Got kill/terminate command from ${message.author.tag}`);
  botClient.destroy();
  process.exit();
}