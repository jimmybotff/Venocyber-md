//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2348064747264";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VqelFaaFVjWVBkUzVLYW82cVVPdmJJbkROa2VQajhoZy9sRnJvZ0NITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lhdmZXNzh6UktJRUYvNFozbDdDWldxdzcyMW9TZTJPRkpnODVGS0RCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRGwwalhGOWwrcTYxUk5zUXBjRG9HNmYrWlByb1VYclRjTXJEWTNzVjF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SGxJZ2R5WEtadDFNY1lPZjFQWmNKd01udy8xVUgvQXpndHhReW02anlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJQzNhSkt2VUhxQ3RRcS8zK21wL0lYUmFuemhGa0d1VWdGTG1TYXFkRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9pSkZHUFBMb2tuV1JlWjFuczNVVzl5d0pERzh4ejRkVDlQRlZZQmJJd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZhWnlvTE5YVXlkcWlBdmc2dXBQZWVnTXpJc3hMWWRDK3kxV2U2cTlFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL04zd2IrbVdyNXh1a3N0anN2T2t4aWswMGxiT3k5T0ttT0xibTRQRWUyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF0QmNoQy9pMkxvdHIwWWs3ajllMW5vSWhrbjVaNWJjZzQ4SjNvYUlDWDZNcnJPUWtNU0tnT0F0L3dQOVo1MDNVT3hpMXViblZQOS9QM252bXJVVmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiIvRHg4enpYVXo5angvSW10eUFKaHZBR3Ywd2J2K0QxUFRHVGUreDFaY1RJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnWHVWQXU5ZVFiV3RBNzBJbHRqcElnIiwicGhvbmVJZCI6IjI1Njg5YjY5LWE1NjMtNGJjZS04NzU3LWIwNzE5YWFlODkwOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkb1hRNERlZWtvMWdrSDl1ZkxmNHk5YUswUEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHpmUCs5Rlcyb1hzZjJSMWxQWnFReUZ0TWxFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFCRjFGVENaIiwibWUiOnsiaWQiOiIyMzQ4MDYzNzQ3MjY0OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpJTU1ZIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL3JwTDhERUxMSGs3UUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvVkdNNFM4bW9YNXBaK2oyNmpSQUowck45Z2xlYkFqdGIreXlaYjFQTXlBPSIsImFjY291bnRTaWduYXR1cmUiOiJaLzZ5SzZ2L0NBMTNVYUhObmpjcjZEbnAySWZWNHdkeFY1c3pyTllXeXM3ZUFWNXF5ZW1XdDd1VVNMUzNxelREc2hjWm54MkRHTnBKMng5b3oxOWVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1pBSkZERWVXbUFZUjNSb3I1b3p4UW5DK3d0NHdmaTRYZ1JJc3Q4TG9lMTRzbDJNY3VYN00vWXNWNTg5SGd4UGtvdHAvZTMyampuWWc5TkpPa216aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDYzNzQ3MjY0OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFGUmpPRXZKcUYrYVdmbzl1bzBRQ2RLemZZSlhtd0k3Vy9zc21XOVR6TWcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5ODUwODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGVmIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "JIMMY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "JIMMY FF",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
