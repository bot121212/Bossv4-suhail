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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_18_02_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSb1lDR1Jib3VLTGVuUm41dHp6TXJtMlZuRWQzbE9ML2tOeHByT1NtME9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOeXROaGxCeFRnU3dBVUQzbldSQ1ZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkY2RlZjQ3LTQ4NWItNDkzMC05MjcwLTM1MzUyNWE2NWU1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA5OCxcbiAgICAgIDEzOCxcbiAgICAgIDg5LFxuICAgICAgNDMsXG4gICAgICAxODIsXG4gICAgICA0MixcbiAgICAgIDEwNyxcbiAgICAgIDE3NixcbiAgICAgIDI5LFxuICAgICAgMTQ4LFxuICAgICAgMjEyLFxuICAgICAgMjM4LFxuICAgICAgMTMxLFxuICAgICAgMTQ1LFxuICAgICAgMjE3LFxuICAgICAgOTIsXG4gICAgICAyMzYsXG4gICAgICAxMDYsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMDQsXG4gICAgICAyNixcbiAgICAgIDU2LFxuICAgICAgMTIyLFxuICAgICAgMTk5LFxuICAgICAgMjQ5LFxuICAgICAgNjYsXG4gICAgICA0OSxcbiAgICAgIDIzMCxcbiAgICAgIDE5MSxcbiAgICAgIDkwLFxuICAgICAgMjE4LFxuICAgICAgOTgsXG4gICAgICA1MixcbiAgICAgIDEzMixcbiAgICAgIDE5NixcbiAgICAgIDIzOCxcbiAgICAgIDEwMyxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI5OVoyTTNLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNuk2YDZgOCjttmA2YDYr9uMINmF2YDZgNmE2YDZgNqpIFxcbuKBuVxcbsKyXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcbvCdkIvwnZCE8J2QhvCdkITwnZCN8J2QgyDwnZCI8J2QjfCdkJLwnZCI8J2Qg/CdkITigbDCucKyXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2NStkVUNFTzMxdmIwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0dUZiOUw5N0RRRnlTVlBabHovcVMzMGZpL20zdzZ4RnZETFZhalhIdmVNR1pBNjB3UGRYMitHSlluRzhvNjFHOUJEUWxQay9ncmQyWm5XWTlFbDhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1V1AyUGV1bnY1YTExTGZqOW1CL0p4emN1bXUxZm94UjV6dHVqM2JUUm9WL2FscFBQbWhPZnZqWUJTbXBQamdHT0hOdXRjb2Nia2M3a2xKZUNleUdBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5NTUzNTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0VaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwZURPczhGTXIzaHdiNm85VWQ5SExjZG9IM3pSOXVyK1VzeitUcllsWm5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjgzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
