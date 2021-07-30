const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
  name: "embed",
  category: "utility",
  aliases: ["createembed"],
  useage: "embed <Title> ++ <Description>",
  description: "Let's you create an Embed",
  run: async (client, message, args) => {
    if (!args[0]) return functions.embedbuilder(client, 5000, message, "#ff264a", "`" + message.author.tag + "`" + " Please add something you wanna send")
    message.delete({
      timeout: client.ws.ping
    })
    return embedbuilder(client, "null", message, "#c219d8", args[0], args.slice(1).join(" ") || "");
  }
};
