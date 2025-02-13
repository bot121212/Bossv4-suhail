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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_54_02_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2TGgrWk9URkNJdlRxWWNnV3lnamczS29VR3JScWVDd25aVmF1VXJsZVIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOTllpTF9KM1JGS1F2VFp6a0J2eXpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmN2RkODBjLWJlZjUtNGNhMy1hY2IyLTM2NTQ2NmU4NjA2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDMxLFxuICAgICAgOTgsXG4gICAgICAxNzksXG4gICAgICAxOTYsXG4gICAgICAxMDMsXG4gICAgICAyMSxcbiAgICAgIDEzNixcbiAgICAgIDE2MSxcbiAgICAgIDQzLFxuICAgICAgMjAwLFxuICAgICAgNzIsXG4gICAgICA2OCxcbiAgICAgIDg1LFxuICAgICAgMCxcbiAgICAgIDI0NSxcbiAgICAgIDExNixcbiAgICAgIDE5NixcbiAgICAgIDEzNyxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDg3LFxuICAgICAgMjQxLFxuICAgICAgNTQsXG4gICAgICA4NyxcbiAgICAgIDE0MCxcbiAgICAgIDE0MixcbiAgICAgIDUwLFxuICAgICAgOTgsXG4gICAgICAxNTUsXG4gICAgICAyLFxuICAgICAgMTYzLFxuICAgICAgMTE2LFxuICAgICAgMjAsXG4gICAgICAzNCxcbiAgICAgIDI1LFxuICAgICAgMjQzLFxuICAgICAgMTkyLFxuICAgICAgMjM0LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUZHQTRQOUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuNStkVUNFSnVQdUwwR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEWVZQYnF1RlpsdzVvTkhHd2hZZitCUEx4Z2dlVnhjMTM2TlBsT2xoMnlrK3dVdlV3cXgyN2l0ckRaaVV1cXJROWhZaTRkUXF2dXBqRHhOREZzTkhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4Wm93VzZibTJEcldnT0VXUndPRnVPSFVxTGlJZWQxWjUrZkFWWXBiVkpkbnQwbFRTZ2xoaW5SMTRNSFpGNTZzd3RVWlZjWUhVUzlEMjlLRFJ1WWpndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk0NTg0NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9FWi5qc29uIjogIntcImtleURhdGFcIjpcInBlRE9zOEZNcjNod2I2bzlVZDlITGNkb0gzelI5dXIrVXN6K1RyWWxablU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODM5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
