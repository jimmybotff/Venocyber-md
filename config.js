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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tyME5uSUlRVSs2RTRJWFpFVnhYZmw1YzFzY1pmM1BCdnBjVHRlQi9GTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlpDZGQwSTU0TnZmOVVSUndiQnY3R3JZcXN6VWVIR2VIUVF2UmVVc29uWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSGhoMkR0cHhqOUxBWXFOUkwvdVExNFNCR1NhUHNtUWJpVVBodzhOem5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQR1dvQXpJWTVkRjVlTVkxVkxadlFtY0tpdVpObllWemZSOUVscmF4ZzJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDNU16YUpVZDVLOGdpeXFiZ3lVclFUbXdad2VGdkRxVVpBbnNRQW1wR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk0Y1dYVTQ1VnlOTmgzdVM3eDhmMnF6WldlYTRDS3FEakV2STFwcWt1bnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUsvbVo1Ri83U0FhZisvOW93L2RXTFV4ZHJjSmRQQTVWM1Z5cFppTkpGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclp0Nk1VK05zZEIzTnRVL3E5b2hlSFpiV3hOSUkzSTdiRXpBZEYrenFoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNpclNhcEV3R2lMRnZtTFd1elp4cFg1cTIzUks5TDBzOWpDUXY4L0R3c0VWOVZBOGNHM2kzSGtLdm1KbWtNUkMrRkhjYlRnNGN3dFo3RzNBSzh0c0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJPVmx3ZUtiWHMwWHdRRmNZZlczSlBJSXhJdGgyTnpXdlBBb0VSdGRrYjFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGQlljMlpEWVN0MjR4ci1jeWRxYktRIiwicGhvbmVJZCI6IjYyOTg3ZGM3LWYwYTgtNDM1OC1iMzRiLTEwYmI5OTlmYzZmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVd0NIK2pwZUIybDJJamwwclhERVV6RENpTzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1EQzJBQmtHTDZVWXBWK01MK0JEaGlWbElnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk5TkZQNVFTIiwibWUiOnsiaWQiOiIyMTI3NjgwMjcwMjM6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJZQVNTSU4gN0dBUiBWIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOMkVpdDBGRVAvQWtiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnSkRaT1c1b3BPcWVWWXdFNkRiVm10TGtKcGRQNnlUUjlsd0hONTc4SVZZPSIsImFjY291bnRTaWduYXR1cmUiOiJ0aEcwUjRpSjhMSW1JVEM5OVVGR3dOc0dYYi84dndQc3BXdk9jbGdFOGVJN2pqUndPUWZMUU9OWU9YeFo5eWdaNEhDY1VHV1Jxc1FoL0VHTlNVVExBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUXZqZFZLcHNtbG9xV0ljTTJ1Z3RHMHg1ODZWclcxNzM2RzlDcXJrTkFBWng4UnNlZW9IakpUQ0U0WmFWWE1BTVJkMUxnbUF0cEQ5UlZtazRaTkdaQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI3NjgwMjcwMjM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZQ1EyVGx1YUtUcW5sV01CT2cyMVpyUzVDYVhUK3NrMGZaY0J6ZWUvQ0ZXIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTUxNTAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpEZCJ9="
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
