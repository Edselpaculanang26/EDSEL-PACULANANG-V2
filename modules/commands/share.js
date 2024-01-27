const axios = require('axios');

module.exports.config = {
  name: "share",
  version: "8.2.1",
  hasPermission: 0,
  credits: "Hazeyy",
  description: "( 𝘽𝙤𝙤𝙨𝙩 𝙎𝙝𝙖𝙧𝙚𝙨 𝙤𝙣 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 )",
  commandCategory: "tools",
  usePrefix: true,
  usages: "( share [ Token ] [ Url Link ] [ Amount of Shares ] )",
};

module.exports.handleEvent = function ({ api, event }) {
  if (!(event.body.indexOf("share") === 0 || event.body.indexOf("Share") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  try {
    if (args.length !== 3) {
      api.sendMessage('⚠️ 𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝖺𝗋𝗀𝗎𝗆𝖾𝗇𝗍𝗌. 𝖴𝗌𝖺𝗀𝖾: ( 𝖲𝗁𝖺𝗋𝖾 [𝗍𝗈𝗄𝖾𝗇] [𝗎𝗋𝗅] [𝖺𝗆𝗈𝗎𝗇𝗍] )', event.threadID);
      return;
    }

    const accessToken = args[0];
    const shareUrl = args[1];
    const numberOfShares = parseInt(args[2]);

    if (isNaN(numberOfShares) || numberOfShares <= 0) {
      api.sendMessage('⚠️ 𝖭𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝗌𝗁𝖺𝗋𝖾𝗌 𝗌𝗁𝗈𝗎𝗅𝖽 𝖻𝖾 𝖺 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗂𝗇𝗍𝖾𝗋𝗀𝖾𝗋.', event.threadID);
      return;
    }

    function sharePost(accessToken, shareUrl, numberOfShares) {
      for (let i = 0; i < numberOfShares; i++) {
        setTimeout(() => {
          axios
            .post(
              `https://graph.facebook.com/me/feed?access_token=${accessToken}`,
              {
                link: shareUrl,
                privacy: { value: 'SELF' },
                no_story: true,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
            .then((response) => {
              if (response.status === 200) {
                api.sendMessage(`🟢 𝖲𝗁𝖺𝗋𝗂𝗇𝗀 𝖯𝗈𝗌𝗍 (Share ${i + 1})`, event.threadID);
                api.sendMessage("🟢 𝖱𝖾𝗌𝗉𝗈𝗇𝗌𝖾: " + JSON.stringify(response.data), event.threadID);
              } else {
                api.sendMessage(`🔴 𝖥𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝗌𝗁𝖺𝗋𝖾 𝗉𝗈𝗌𝗍 (Share ${i + 1})`, event.threadID);
                api.sendMessage("🟢 𝖱𝖾𝗌𝗉𝗈𝗇𝗌𝖾: " + JSON.stringify(response.data), event.threadID);
              }
            })
            .catch((error) => {
              api.sendMessage("⚠️ 𝖤𝗋𝗋𝗈𝗋 𝗌𝗁𝖺𝗋𝗂𝗇𝗀 𝗉𝗈𝗌𝗍: " + error.message, event.threadID);
            });
        }, i * 4000); 
      }
    }

    sharePost(accessToken, shareUrl, numberOfShares);

    api.sendMessage(`Sharing ${numberOfShares} posts on Facebook.`, event.threadID);
  } catch (error) {
    api.sendMessage("⚠️ 𝖤𝗋𝗋𝗈𝗋 𝗁𝖺𝗇𝖽𝗅𝗂𝗇𝗀 𝖼𝗈𝗆𝗆𝖺𝗇𝖽: " + error.message, event.threadID);
  }
};

module.exports.run = async function ({ api, event }) {}
