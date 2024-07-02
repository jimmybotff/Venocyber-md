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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUM3UVJXVE5lbkppcHBOREdXN3NtT2tIT21rRHhkcENyd1lQQU9WWW8zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3A0TlBaQjdseXFiYWNtK1paN0JrN3ZPMVFKRDJhL0txRTRuZFM4MEgxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR3Y4Um5KNXBwWWJqaGc4TXFvS1RyMVdDNDhnYndvZEROYnVLSVZtZzAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQc2dUOU5iTWl2clRzS3MwTjZiOVUrYWtSdmRoMVo3Mm1QbHd4d0cvQ3lVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLbVQzcnNIa1JOV0FDRDBqVHlxU1JTYitjR0swZXVCNjhwdnN0ajRFMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRaZ0dwWUtDR3dQNS9KVEJ0Z0diMnNkZHJuV0UxMG9vdjdBT3VaZzVpVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtUUmEwb0FpbHdwMTBvNUZpTlJ5L3AyMm9EbFhudXBXaWJqRFVKNUZtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGV3MlZlV2VXd2VISW1BZGdxSm82K1Vib25lSnFYRWRxTXlGTEZsNlhUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB5K3FtTFdLYUR6c2ZoVlhqZUJMQ3B5b0NvOGN6UzU4bnNraEpvd1MwME1uWEZZSmdrVUZhM3N3RUw4cHliUFlTMzNBOXJvcmNOWlV5bDJGSkhIeWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJmOXJod0xLVW5raXJvQU5iRXF1ZUpCQitxWXI5MEJDTUtTcjZYNGNYTTk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGQVBhQUNEd1RQNkU5cW5mbFI4ZEl3IiwicGhvbmVJZCI6IjViYTMyZGExLWMzODMtNDE3ZS04NWNhLWVkYmQ0NjNiNDU2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Z2JFTU9mV1JZR3Y4V2JoY2d5Z0l5d3B6dUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2R0MWRORjFnNWIrWXVhRXBKZmxtQjdtTENvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRMV1NZUDZEIiwibWUiOnsiaWQiOiIyMzQ4MTI1MTgwMzE3OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFydGVtaXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xQVXJxOEhFT21pa2JRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikk1aW5rV1pCS3hLS0dBYm92Njc2TTRJL0RRaTZkcE9nRlNGalM0N0M0eDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRzdU9sUUJVUE9JaDZhcDcwODBhemJza3VRVGZHN3pYanROb2RKUWVUZE56M3dUSDQ4SmQxbzJ1L0cyQ1BsMDRtbDIyUjBpSDcvS3l1dGFGUVkzL0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0cEpZNVFES3REd2dueU5tWXBqeUFxbmNFb01WbXpLQzFSWC9uSE91TjNPMlJkd25qbm5IM3lMK1B0WVZxdWdqY2FJRzJ2ZkNPUU1kWjNLeGhjbzVnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjUxODAzMTc6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU09ZcDVGbVFTc1NpaGdHNkwrdStqT0NQdzBJdW5hVG9CVWhZMHVPd3VNZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTk0NzYzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCbUwifQ="
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
