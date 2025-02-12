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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_59_02_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidXErTzJEWDFONWVGcEV4a2pRb0NwVEtqK0orMmpoZ2F0RDhadTA2RVVZST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODA3eHFzZXRSb0d1SmlIaWtwcXdsUVwiLFxuICBcInBob25lSWRcIjogXCJjMGYxOWQwOC0xZDQ0LTRkOWMtYTY4My0zNDJiOTcwYjJlMTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMjIsXG4gICAgICAyMTgsXG4gICAgICAxMzksXG4gICAgICAxOTIsXG4gICAgICAxNDEsXG4gICAgICAyMTQsXG4gICAgICAxOTIsXG4gICAgICAxOTAsXG4gICAgICA5NCxcbiAgICAgIDE5MCxcbiAgICAgIDMxLFxuICAgICAgMTk3LFxuICAgICAgMjE2LFxuICAgICAgOTUsXG4gICAgICAxODUsXG4gICAgICAyMjYsXG4gICAgICAyNixcbiAgICAgIDcwLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTgyLFxuICAgICAgMTAzLFxuICAgICAgMjU0LFxuICAgICAgMjQxLFxuICAgICAgMTUzLFxuICAgICAgMjQsXG4gICAgICAxNjAsXG4gICAgICAxNixcbiAgICAgIDIwLFxuICAgICAgMTEwLFxuICAgICAgMTI5LFxuICAgICAgMjI1LFxuICAgICAgNzMsXG4gICAgICAxNzMsXG4gICAgICAxOTUsXG4gICAgICAxODcsXG4gICAgICAyMzksXG4gICAgICA2LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCOEFRQ1c5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbjUrZFVDRUliRHM3MEdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFdieEExQmxESXFhUGg0WE5OUmdYenNnZnhTUHBpYkRVKzhJZmp1UFRDSjF6QkJkeHhpTjZ2cUIzVjU1bTJlTkNQZWlrSy9kb3NaSExzTHZWbVF0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRy80SW1NdTkvMXIrdWZ5VDZ0ZjdmeTRQQXlKME5mcm1BL3NFc1NSVTdzQWl6RXZYZ0RCZFdPMUo4MzFLZ0ZrSENIVVRPVHRBa3hTK25RWDV6bVpmaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5MzgzMTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0VaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwZURPczhGTXIzaHdiNm85VWQ5SExjZG9IM3pSOXVyK1VzeitUcllsWm5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjgzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
