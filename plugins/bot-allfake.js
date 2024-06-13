import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador
global.creador = 'Wa.me/212681951915'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Mensajes Fakes

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var canal = 'https://whatsapp.com/channel/0029VahoaSeGzzKKgUgAa80y' 
var canal2 = 'https://whatsapp.com/channel/0029VahoaSeGzzKKgUgAa80y' 
var canal3 = 'https://whatsapp.com/channel/0029VahoaSeGzzKKgUgAa80y'
var grupofb = 'https://www.facebook.com/groups/' 
var git = 'https://github.com/Alinafis21' 
var youtube = 'https://www.youtube.com/@aliyt2998' 
var github = 'https://github.com/Alinafis21/YoshikoBot-MD' 
var facebook = 'https://www.facebook.com/' 

global.redesYoshi = [canal, canal2, canal3, grupofb, git, youtube, github, facebook].getRandom()

global.canalesYoshi = [canal, canal2, canal3].getRandom()

var img = fs.readFileSync('./media/menus/Alsombra.jpg');
var img2 = fs.readFileSync('./media/menus/Yoshi.jpg');
var img3 = fs.readFileSync('./media/menus/ImagenYoshi.jpg');
var img4 = fs.readFileSync('./media/menus/YoshiBot.jpg');
var img5 = fs.readFileSync('./media/menus/Sombra.jpg');
var img6 = fs.readFileSync('./media/menus/MiniYoshi.jpg');
var img7 = fs.readFileSync('./media/menus/MiniBot.jpg');
var img8 = fs.readFileSync('./media/menus/Mini.jpg');
var img9 = fs.readFileSync('./media/menus/YoshiMejor.jpg');
var img10 = fs.readFileSync('./media/menus/YoshikoImagen.jpg');

global.yoshiImg = [img, img2, img3, img4, img5, img6, img7, img8, img9, img10].getRandom()

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = "" + hour;

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "212681951915-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: yoshiImg, sellerJid: '0@s.whatsapp.net' }}}

const moji = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/YartexBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//global.fake = { contextInfo:{ forwardingScore: 0, externalAdReply: {title: '🌟 Bienvenido ' + nombre, body: team, sourceUrl: yt, thumbnailUrl: yoshiImg }}} //Fake simple

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363293269521482@newsletter', serverMessageId: '', newsletterName: '♞ 𝙏𝙤𝙢𝙞 𝙗𝙤𝙩 - 𝙈𝘿 ✿' }, externalAdReply: { title: packname, body: `ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🍫̸̷᮫ᨘ۬ׄ߭ᤢꫂꥈ Hola! ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: yoshiImg, thumbnail: yoshiImg, sourceUrl: redesYoshi }}}, { quoted: m } //fake con reenviado de canal
}

export default handler
