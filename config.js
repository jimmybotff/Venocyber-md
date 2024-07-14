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
global.owner = process.env.OWNER_NUMBER || "2348063747264";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpzU1crZFM1RDhKSVBZMHNFTGVXMmo2NlNCT0hNUWNhVlpXL29VVEMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWZDWDJxb1R4TzJra09oSU5OSENtUnhGRjBTZ3A4QVVJcm5DdGZoTHhUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTldCZUdTb2NRWkEvVXBvdittYUNvT2hlRUNMUEhrUEF0Y3FYelhnTTNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S2l4SDVNekhlVjM4SGZyaGZ4cnNVN2cvLzZoczJ0MWlCZC9NRjlkNjJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBbXJmV3E1QmI3VnZmK3g1ZHFGbjJvNnhSRWl0Q0VsTW5TQVY1MEpuMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB3SGtoN3NnTzJOVUJkS1U0OU9nL1J6cFkyT0F3UlY1a2Zvc3JDbzRuMUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VlV1VtNVZmdmxqbGRNR3JNc1RHUXgyUk5GdlM0NXdVbnkwc1hZTzhFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhQRlcyQy9CWTUvdFRMaHlPR1BlZXVodDdTVDJENlpaRTdVNjBkU0NrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRoMGQyYnZNRGNNVU9MQzlKcnNPWm4wMHJrZCtmZXA0SGQwMkpVdm50M2FJQS9yRDVVbzNXZkoyVFJPdFYvVm5UTkV4elNXVGVmbExpbmhXaTVlckJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6ImdzcTU4aEtWZHhUcXljV3pzc1YwQktCTThBbEIzZlQyNDlXTVFsK3pqVlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkQ2bENnY0NtUkFpTDdXaDFfbk9PRVEiLCJwaG9uZUlkIjoiYTc1M2ViOWEtYmYwZS00YTY3LWFkNWUtOWViOTJlMzQ2ZDVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndtR2dpdmZUaUZwNVUwaEdwSDBVRWcyMHp2MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjanJLaW9LR1ZtMzVZN1crWklqRUJBU24zS0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTE4yR1pLOFciLCJtZSI6eyJpZCI6IjIzNDgwNjM3NDcyNjQ6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSklNTVkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vcnBMOERFTnFSMExRR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9WR000Uzhtb1g1cForajI2alJBSjByTjlnbGViQWp0Yit5eVpiMVBNeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iks2ZFU2K3JrSjJ4ZHVCcG8zVFdrOGVXNkxURG1VZGp0L201NnR6OHQvSG1qSkFIc1VMUVppZmlFOW5RenBkL0tRWTg5b1RucERRV0FxNjV0VjY5TER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGY3RUdEl3VTZGR2hTdElPdGpUQ3pJR1ZSVG1MTWRhQ0djTHFYKzBnQ3FzZzVkbFhjTXFLQ25ZNS8vU0U0aXpYSml4aWF4a0dKR2FoM0R6dDRldHJCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjM3NDcyNjQ6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUZSak9FdkpxRithV2ZvOXVvMFFDZEt6ZllKWG13STdXL3NzbVc5VHpNZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk3NzY0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEZW0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "JIMMY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "JIMMY-𝐌𝐃",
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
