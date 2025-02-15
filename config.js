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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_55_02_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjIrRW5MeStLMTRSOXhRSm05MHdpU09FcXF1cWRtQlR2UzAvZk5CZ2ppUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmNXaW9qVG1RT2kzclByZjlBYzBzQVwiLFxuICBcInBob25lSWRcIjogXCI3NzUwNGI4NC1lYjBkLTRjMzMtYWRiYy1mN2E3ZTljODc2ZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMjQxLFxuICAgICAgNDQsXG4gICAgICAxNTQsXG4gICAgICA3NixcbiAgICAgIDEwMixcbiAgICAgIDE1OCxcbiAgICAgIDUxLFxuICAgICAgMTk3LFxuICAgICAgMjIyLFxuICAgICAgMTQ3LFxuICAgICAgMTIyLFxuICAgICAgMSxcbiAgICAgIDE3NSxcbiAgICAgIDI0OCxcbiAgICAgIDI1LFxuICAgICAgMTcxLFxuICAgICAgMTI4LFxuICAgICAgMjQzLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxMDIsXG4gICAgICAxMzAsXG4gICAgICA4MyxcbiAgICAgIDI0NCxcbiAgICAgIDg4LFxuICAgICAgMjMwLFxuICAgICAgMjUyLFxuICAgICAgMTYwLFxuICAgICAgMjI1LFxuICAgICAgMTkxLFxuICAgICAgMTA5LFxuICAgICAgNjcsXG4gICAgICA2NCxcbiAgICAgIDYwLFxuICAgICAgMTA5LFxuICAgICAgMTAxLFxuICAgICAgMTY4LFxuICAgICAgMTE5LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFOMkoxTk1GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNuk2YDZgOCjttmA2YDYr9uMINmF2YDZgNmE2YDZgNqpIFxcbuKBuVxcbsKyXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcbvCdkIvwnZCE8J2QhvCdkITwnZCN8J2QgyDwnZCI8J2QjfCdkJLwnZCI8J2Qg/CdkITigbDCucKyXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2NStkVUNFUHlEd0wwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3c1Z0V2w3c3RPZzlyYnpVemtlMlR5NDAvVURyRmRLODNtN0I1Wm1jZVVPY0c1NUFCeGsySGtkbk1yUzdRL2x6UlltMHR3dHY0Q05BV3JuTTFidndBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvR2JteVhaNklCSXAxLzZJd2NpYTQvZWdLWWFYYnJlNU5TNVg2WUthZ1pyNzVMSUFCcXNXb05HNTJqZ3VMTzJqSlovREVZL2pKRkp0SXB2dng5aGdoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5NTg4MDk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
