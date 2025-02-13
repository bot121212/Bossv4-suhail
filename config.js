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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_26_02_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3BCMnZrTGd4NEtIQ1NSeER4bjVKVkYwejFQYjY2MHMxVmsxeXN0WUFMZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjQ1TERfTC1TWGllMWlrMWF6VXBJd1wiLFxuICBcInBob25lSWRcIjogXCIwN2Y0MzUzYS1kNGZmLTQwMGYtYjU5Mi00MDI1ZTdjZTg2NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMzMsXG4gICAgICA5LFxuICAgICAgMTMzLFxuICAgICAgMjAwLFxuICAgICAgMjcsXG4gICAgICAxNDUsXG4gICAgICA1MSxcbiAgICAgIDEzOSxcbiAgICAgIDYyLFxuICAgICAgMTM1LFxuICAgICAgMTAyLFxuICAgICAgMjEzLFxuICAgICAgMTA3LFxuICAgICAgMyxcbiAgICAgIDc1LFxuICAgICAgMjUyLFxuICAgICAgMzQsXG4gICAgICAzMyxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyNTIsXG4gICAgICAyMDMsXG4gICAgICAyMDMsXG4gICAgICA1LFxuICAgICAgMTQ0LFxuICAgICAgMjIzLFxuICAgICAgMTc4LFxuICAgICAgMjI2LFxuICAgICAgMTI1LFxuICAgICAgOTEsXG4gICAgICAxOTcsXG4gICAgICA1MSxcbiAgICAgIDkyLFxuICAgICAgMjUyLFxuICAgICAgMjU1LFxuICAgICAgMjEwLFxuICAgICAgODIsXG4gICAgICAxMTAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjJZQjhIOVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xyNStkVUNFSUtydWIwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwR1poM3hyckRHa21MdnhUWklMZFVFRVRPRUxxVk44T2o1blRadU03dEE5dnJTRDNpVlVIWHF1S2dOVkdTL0UwVFhYOEU1QzhHdVNhZnhDaEFLemdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyOFZVTzRyWWRJSnF6WjZnZTFtQ0J3YXBnbDM1TGtiUWtXTzVpR0hkblZLdzhQYXpCb1VyZzdRbklPWWlleFFhaWVOak84TGpGRUhEU0tiUDdGQmxpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk0Nzg0MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9FWi5qc29uIjogIntcImtleURhdGFcIjpcInBlRE9zOEZNcjNod2I2bzlVZDlITGNkb0gzelI5dXIrVXN6K1RyWWxablU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODM5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
