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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_37_02_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrbWt0SVRhelpqbjRvSWZHSGc4OC81VHZUZzhCSGp2SzZ4NzVaRUptNFpZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1OVUwenB4VlFIcVU2dEZhZ2xhTHFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0ZTZkNjhmLWFkZjgtNGYzMS1hMGQyLWE5ODBiODNlZjQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE4MSxcbiAgICAgIDgsXG4gICAgICA5MyxcbiAgICAgIDExMyxcbiAgICAgIDEwMSxcbiAgICAgIDk5LFxuICAgICAgMjQ4LFxuICAgICAgNDEsXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDcxLFxuICAgICAgMjIzLFxuICAgICAgODYsXG4gICAgICA4NixcbiAgICAgIDE4NCxcbiAgICAgIDE1NSxcbiAgICAgIDIyOCxcbiAgICAgIDEyNSxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTI1LFxuICAgICAgMjAwLFxuICAgICAgMTYyLFxuICAgICAgNjYsXG4gICAgICA0MSxcbiAgICAgIDEwMCxcbiAgICAgIDM1LFxuICAgICAgMzQsXG4gICAgICAyMDksXG4gICAgICAyMzAsXG4gICAgICAxMzcsXG4gICAgICA0OCxcbiAgICAgIDExNSxcbiAgICAgIDc4LFxuICAgICAgODQsXG4gICAgICAxNzYsXG4gICAgICA2NCxcbiAgICAgIDEzOSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSEVRVFE5M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcjUrZFVDRUtTcXZiMEdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia005RUl1eGhsUCtWZWZhL0FaUWc1dDVPRnpJY05FZVNMajhDelYrbkMxUGZabTFjMm1nRGNObFZMYjNhK2ZNSkplbEZ0QnRXdllRVnQzeHFsallRRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFpDYVdvV2cza0ZEOW5sQTNsNVQvaUN2WnlseWt1UkRGNTM5cEd6bDIycmZYMG5rZnRXR1EvaE1YMUJYTmNvVUxSdklvOEtDQUtycXRDWWNNYTRLaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTU0Mzg0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9FWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0VaLmpzb24iOiAie1wia2V5RGF0YVwiOlwicGVET3M4Rk1yM2h3YjZvOVVkOUhMY2RvSDN6Ujl1citVc3orVHJZbFpuVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4MzksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
