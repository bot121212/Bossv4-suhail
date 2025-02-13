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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_51_02_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzMnlGUkxJbUEwR2lIYnFwQ2c2WXYrSjg1VmhpTUhqM2xjdjkrSHlYVXg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUUHFOb19KYlNFYTNNMF9BN0lnaUR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkM2NjYjdjLWI5MTAtNGU4Yy1iNGNkLWIzYTRjMmU2YzljOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDYyLFxuICAgICAgMTI5LFxuICAgICAgMjEyLFxuICAgICAgMjUwLFxuICAgICAgMTMwLFxuICAgICAgMTc5LFxuICAgICAgMjUxLFxuICAgICAgMTcyLFxuICAgICAgMTczLFxuICAgICAgNjIsXG4gICAgICAyMjYsXG4gICAgICAyNTAsXG4gICAgICAxMjAsXG4gICAgICAyNTIsXG4gICAgICA2NSxcbiAgICAgIDI0NyxcbiAgICAgIDg2LFxuICAgICAgNTIsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICA3MCxcbiAgICAgIDEzLFxuICAgICAgMjQ0LFxuICAgICAgOTMsXG4gICAgICA4NixcbiAgICAgIDcyLFxuICAgICAgMTg2LFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMjUwLFxuICAgICAgMTc2LFxuICAgICAgMjIwLFxuICAgICAgOTMsXG4gICAgICAxNjksXG4gICAgICA4NCxcbiAgICAgIDIyNSxcbiAgICAgIDI0NixcbiAgICAgIDkyLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw0WTlEMk5DXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbjUrZFVDRUwvWXRiMEdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUXpKanA2YTNwZVU0WjlBMEVBZTM3a0owR2s0dWFmMFNSRSs5VW9hWWYyS0I2M2tHS3Zaa0lWcmpCQlBSSWM2L0xkWTlKcWxZc09PWTl2NmFSOTEwREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQytZbmUxbU5lRUQrUkliTWhlWlpYQi9tQk0yRWlyNDdoQUkzVW5IM0RpdFo5dU9JZDR0T25lQXhZNk5LY0IrUUcyYzErVkxUa0grdnEzMUhKMWM3Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5NDE4NjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0VaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwZURPczhGTXIzaHdiNm85VWQ5SExjZG9IM3pSOXVyK1VzeitUcllsWm5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjgzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
