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
global.owner = process.env.OWNER_NUMBER || "255742862266";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lWc1lPdWxhR2RoV3V2Rm5qekRjdm9LS0QzLzVsdGVBaEJ6Nzhza04wND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVJ5RU1RNnRlaFZHT29CUDFFdG5yUEdkU2tPY3I3Vk44SVhHZ0tzM2lBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSVVicm9leEFCdjdncWZXcEx3RGR4cjk0N0NKUmRGYzd3YVc4TXpuOW5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYkpja3VVQ2RZK3NnZ2dYRk9DRWhXV1c3TUFzMUpXaDcvQnRTa1hvMHlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CeDFoWGR4UHVXVnc2SW51cTdVSitZalhjMFZQenNHSk1pVDZNSGkzWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOWUNyNWx5eWNJbXpkelRmdHJnQ2RNaWw2RWJzNzBBRkhwSitMOWVpMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUk0RE9GZHVzRzhOQVQwN3h0VnJSQVdQN1E1WWZIR25PVVJaQWhjNUhHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJoc1pFckQwSnVtUldYQ2ViVE5tTEZzdXFjVXMxaU1rdTROcmo1NkRVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjluVzY1UVJXU0N5Yk05STBLRkNtSEJTblIySTJiQTdla1lvTlhUallUc2s2V0JuVmZEWFp3cTRrRGlZZG53SzlrUXhJNkdMcGRscnFlKzcwWncyMGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJFWDFsank2b1hMVUJiVEQ4cVhSRjhRVlVyZDVOakdZSU5CVHVwYklEM1hRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjM3NDcyNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUJBMUI1MDIyQjgxMDNENjgyOUI5RjIxOTFBRDAwMTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTk0NTI4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekNKanNJNlVUdlNSa3ROZVpjY2ZJQSIsInBob25lSWQiOiJlNThkZDM0OS0xYThlLTRhN2QtYmRmMS04YTkwNTQxM2JlMmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWJDVEdkU0JnRnA3NzlkbjVxWGE2aFYzbnJrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZGTUoxb1ZtSStpTWlMUXI1VUs3eU9qS3dOYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIRVM4OEgzUSIsIm1lIjp7ImlkIjoiMjM0ODA2Mzc0NzI2NDoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKSU1NWSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTy9ycEw4REVMZVFrYlFHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib1ZHTTRTOG1vWDVwWitqMjZqUkFKMHJOOWdsZWJBanRiK3l5WmIxUE15QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTFVQd1B4ZEJ0aFJObExSaGRHOS9PTThVdHRWcXNTL0ZpbEUyK0VFeEdhREdhczNSK0hlTy9iRktHMGpIZWhhZWt0QU9oQStvQzJJSHBtQk1KR2E3Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImxtS2Q1Mk82MTlOV2s5ZTdKWGVwQzgrY0ZNcW1pZjBHRnNKeDl3ZGdGQXJ4RjdlZlJSOVEyL1ZpRkRndG9vNHpDSTlHeWd6SElYMHFFaTlBZG9EeGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2Mzc0NzI2NDoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhRlJqT0V2SnFGK2FXZm85dW8wUUNkS3pmWUpYbXdJN1cvc3NtVzlUek1nIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTQ1Mjg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURlZSJ9="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
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
