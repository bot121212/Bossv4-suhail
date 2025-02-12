const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923247116683" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_22_02_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpUeXgwSklhTDdlYWM1SXRaRzFRbTJWaHRCQjk2MUN2V3dGcHhqeVFWbDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJaQTJJSWdBVDRXNnVmaFVmX1pBSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFhN2Y0MWYtODAwOC00ZGExLTk3M2YtY2E4ZjI5OGEyYzFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxNTIsXG4gICAgICAyMTIsXG4gICAgICA5LFxuICAgICAgNDcsXG4gICAgICAxMyxcbiAgICAgIDIwMixcbiAgICAgIDIxNCxcbiAgICAgIDIwMyxcbiAgICAgIDEyMCxcbiAgICAgIDY5LFxuICAgICAgMTg1LFxuICAgICAgNDgsXG4gICAgICAxMyxcbiAgICAgIDE3MixcbiAgICAgIDM5LFxuICAgICAgNDQsXG4gICAgICA0MCxcbiAgICAgIDE0MSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMyxcbiAgICAgIDIyMyxcbiAgICAgIDM2LFxuICAgICAgMTY5LFxuICAgICAgOTksXG4gICAgICAxMjYsXG4gICAgICAxMDIsXG4gICAgICAxMDQsXG4gICAgICA3MSxcbiAgICAgIDE5NCxcbiAgICAgIDEyOCxcbiAgICAgIDY4LFxuICAgICAgNjksXG4gICAgICA1OSxcbiAgICAgIDIxNSxcbiAgICAgIDE1NyxcbiAgICAgIDk5LFxuICAgICAgMTE0LFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhNUUNOVzdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbjUrZFVDRUlPaXRMMEdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXlmSmdaVU84YlJFUEM1QnZiMFAvV1RwVHBuNTVUZlNNZGRrM3kzcm05MWN5aDlEZUljekR6aHoycFF3WjhpWlNEckpMWjdWUGVua09PQW41TXlzQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic2hmRGZ1ZmcxQmwyQnI0ZC8weVFBRDJwREV1RjJXT2p4Rm5rWHJDKzB6c2xtYU5MTEd3Rkcvb1JPcUxnL0tyRkdTWUtZN0N5eXNjbWcrZENZS3RzaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5Mzk1MzM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0VaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwZURPczhGTXIzaHdiNm85VWQ5SExjZG9IM3pSOXVyK1VzeitUcllsWm5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjgzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
