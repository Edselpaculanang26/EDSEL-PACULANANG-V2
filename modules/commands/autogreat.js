module.exports.config = {
  name: 'autogreet',
  version: '1.0.2',
  hasPermission: 0,
  credits: 'ryuko/ modified Prince',
  usePrefix: false,
  description: 'Greetings and hourly message',
  commandCategory: 'system',
  usages: '',
  cooldowns: 3,
};

const greetings = [
  {
    timer: '5:00:00 AM',
    message: [`Good morning! Have a great day ahead!`],
  },
  {
    timer: '8:00:00 AM',
    message: [`- Life update:\nMiss ko na sya\n\n\n- Prince Sanel Osorio`],
  },
  {
    timer: '3:00:00 AM',
    message: [`- Life update:\nNangungulila sa kanya.\n\n\n-Prince Sanel`],
  }, 
  {
    timer: '11:00:00 AM',
    message: [`Good afternoon! Pahinga kana love:>`],
  },
  {
    timer: '10:00:00 PM',
    message: [`Good night! Matulog kana love:>`],
  },
];
const message = ["Don't forget to follow Prince Sanel Osorio.", "This bot is modified by Prince Sanel Osorio.\nYou can Fork here: https://replit.com/@princeosorio/Prince-109", `if you have a consern just say the command ${global.config.PREFIX}callad or message Prince Sanel Osorio`, "Hello, if you're not updated of this botpack here\nFork Here: https://replit.com/@princeosorio/Prince-109\n\n Just remove the appstate thank u for supporting to my modification project☺️","Please Don't forget to follow Prince Sanel Osorio.\nhttps://www.facebook.com/profile.php?id=100088309851834",];
module.exports.onLoad = (o) =>
  setInterval(() => {
    const randomMessage = (array) => array[Math.floor(Math.random() * array.length)];
    const rand = randomMessage(message);
    const currentHour = new Date(Date.now() + 25200000).getHours();

    const currentGreeting = greetings.find((item) => {
      const [hour] = item.timer.split(':').map(Number);
      return currentHour === hour;
    });

    if (currentGreeting) {
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(randomMessage(currentGreeting.message), threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }
    if (currentHour !== 0) { 
      global.data.allThreadID.forEach((threadID) => {
        o.api.sendMessage(`[!] Update Every 30 Minutes\n\n${rand}`, threadID).catch((error) => {
          console.error('Error sending message:', error);
        });
      });
    }
  }, 1200000); // Send every minute (60000 milliseconds = to one minute)

module.exports.run = (o) => {};