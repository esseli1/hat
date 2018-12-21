cssclient.on("ready", () => {
  function blue() {
    client.guilds.get('475064825890734085').roles.find("name", "R̷a̷i̷n̷b̷o̷w̷").setColor("RANDOM");
  };
  setInterval(blue, 3000);
});
client.login(process.env.BOT_TOKEN);
