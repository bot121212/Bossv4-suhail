iconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_00_02_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuM1BWa0hkZVV0ZHZFVmZkYTRseFVWRkdNdGRaVWRmU2l5VkUzcDhzMytNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1LXlyaVdDRVRNYVZuUjB3Q3ZFUFp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ZjA2MWU1LTcyZjktNDhmMC1hMjJjLWUxY2Q3NDU3ZDViZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxMjksXG4gICAgICAxMixcbiAgICAgIDgyLFxuICAgICAgMjMwLFxuICAgICAgMTU5LFxuICAgICAgMTAsXG4gICAgICAyMzQsXG4gICAgICAxNzQsXG4gICAgICAxMTMsXG4gICAgICAxNzUsXG4gICAgICAyMTksXG4gICAgICAyMCxcbiAgICAgIDEzNCxcbiAgICAgIDExNCxcbiAgICAgIDIyNyxcbiAgICAgIDE0MixcbiAgICAgIDE1NCxcbiAgICAgIDk1LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDE2OCxcbiAgICAgIDkzLFxuICAgICAgMyxcbiAgICAgIDE3LFxuICAgICAgMTc0LFxuICAgICAgMjAxLFxuICAgICAgOTMsXG4gICAgICAyNDcsXG4gICAgICA2MixcbiAgICAgIDQ1LFxuICAgICAgMjQyLFxuICAgICAgMjAyLFxuICAgICAgMjA1LFxuICAgICAgMjEsXG4gICAgICAyMDUsXG4gICAgICAxMzUsXG4gICAgICAxMjIsXG4gICAgICAxMzAsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJON0ZTNk1XOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRDUrZFVDRUpXYXhyMEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUVXY1hKb2ZkY2tJWjFhaCtpN29kKzdyakJVc0JydFZSOXFGeDBva0dnVmJtZCtvUWhYU05IdkxXZk1jM0pMNDhVOG45WnoxbTVIMEdxcWh1eUtPRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMjltZ2JLMDU3SjZTVldTMk05ZFNrZHgwMjFIWDlITkk2R3FoMThiNzJ6Um5vVzNvWTd2MEo3QlJtTW9tNmcyK2lqL2dXaXFIYXBPWEpjNTU2YkRpaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTY4OTI0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9xQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3FDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVhIS0p5OW9qb0tYNGxiTXVIYXNLVWZzcVdOekI3ME9xZkdNd0M2QVk4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NDcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk2ODkxNTY0NTdcIn0iCn0="  // PUT your SESSION_ID 


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
