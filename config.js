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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_02_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmVkQ1lwUWVwbmVTd1pIN2I5YU1FR3orMUZsZXQzd1hRRFhCUTR3ZHJsRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZTJtaHpZb3hURlNHTG0wX1YyMW9fQVwiLFxuICBcInBob25lSWRcIjogXCJhZjkwMDljMS00NTY4LTQyMzctYTM1ZC0wNGM4MWUyNDI3YzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgNzMsXG4gICAgICAxMzQsXG4gICAgICAxMzQsXG4gICAgICA2MCxcbiAgICAgIDExMyxcbiAgICAgIDE0MixcbiAgICAgIDE1NCxcbiAgICAgIDE4OCxcbiAgICAgIDIxOSxcbiAgICAgIDIyOCxcbiAgICAgIDIzNCxcbiAgICAgIDkwLFxuICAgICAgMTIyLFxuICAgICAgMjUxLFxuICAgICAgMTgzLFxuICAgICAgMTA3LFxuICAgICAgMTY2LFxuICAgICAgMjAxLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDgwLFxuICAgICAgMzksXG4gICAgICA3MCxcbiAgICAgIDIzLFxuICAgICAgMTY3LFxuICAgICAgMjQxLFxuICAgICAgMTQ2LFxuICAgICAgMTI0LFxuICAgICAgMjAsXG4gICAgICAzMixcbiAgICAgIDQsXG4gICAgICAxOTEsXG4gICAgICAyMzgsXG4gICAgICAyMTMsXG4gICAgICA5NSxcbiAgICAgIDk0LFxuICAgICAgOTcsXG4gICAgICAyNSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTk5TU05TQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcjUrZFVDRU5lVnZMMEdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEFST3hsMGlJaTc0MlpVQ1ZPREpEWDdFSTRINGhwazJsWmY5RDF4d0hyNnBaZ21nckQ0U0xiZDQwV00zUmJ0TG9yTkVFeFNDMHFhMURLVVRtQzdlQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVJzczl3NjJ0K1VDblZyT25xa3ZKd3FHa05wZTRiWVQwc2NDYXRWSE1jOXF1YSsxSkxzaDJpYnpPdGcwVWVBTkk2WERvNHFsSTVVYzAwV3JxdFE3QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTUyNDgyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9FWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0VaLmpzb24iOiAie1wia2V5RGF0YVwiOlwicGVET3M4Rk1yM2h3YjZvOVVkOUhMY2RvSDN6Ujl1citVc3orVHJZbFpuVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4MzksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
