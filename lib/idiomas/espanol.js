const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yoshiko

//AVISOS DE MENSAJE  
const smsAvisoMG = () => { return `╰⊱🌩⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🌩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n` }

//jadibots
const smsIniJadi = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 TOMI BOT - 𝗠𝗗 🍒\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: Tomi bot 𝗕𝗼𝘁 - 𝗠𝗗 🍓`}

const smsIniJadi2 = () => { return `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 TOMI BOT - 𝗠𝗗 🍒\n\n🚀 *Utilice Este Codigo Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Vincular:*\n\n1. Diríjase a los tres punto en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da click en vincular con codigo de telefono & pega el código a continuación.\n\n𝗕𝘆: Tomi bot - 𝗠𝗗 🍓`}

//main.js
const smsWelcome = () => { return `╔═.✵.════ ✰ ════════╗\n@subject\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 (𝙰)!!\n┃ @user\n┃ 𝙻𝙴𝙰 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🍬\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsBye = () => { return `╔═.✵.════ ✰ ════════╗\n- *𝙏𝙊𝙈𝙄 𝘽𝙊𝙏 - 𝙈𝘿 🐱*\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ @user\n┃ 𝙽𝙾 𝙵𝚄𝙴 𝙳𝙸𝙶𝙽𝙾(𝙰) 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸 👋🏻\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsSpromote = () => { return `*⎡ •🍓 Nuevo Admin detectado 🍓• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdemote = () => { return `*⎡ •🍓 Waoz Un Admin Meno 🍓• ⎦*\n*━━━━━━━━━━━━━━━━*\n🍬 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdesc = () => { return `❏ 🍬 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSsubject = () => { return `❏ 🍬 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsSicon = () => { return `❏ 🍬 *Se ha cambiado la foto del grupo.*`}

const smsSrevoke = () => { return `❏ 🍬 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

//propietario
const smsJoin1 = (usedPrefix, command) => { return lenguajeYL['smsAvisoMG']() + `🍓 *𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝙴𝚕 𝙴𝚗𝚕𝚊𝚌𝚎 𝙳𝚎 𝙰𝚕𝚐𝚞𝚗 𝙶𝚛𝚞𝚙𝚘*\n*𝙴𝚓𝚎𝚖𝚙𝚕𝚘:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeYL['smsAvisoEG']() + `${packname}\n*𝚈𝚊 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘 🍒*`}

const smsJoin = (user) => { return `${packname}\n_🍬 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘_\n\n🧃 *𝙵𝚞𝚎 𝙰𝚐𝚛𝚎𝚐𝚊𝚍𝚊 𝙿𝚘𝚛: @${user}*`}

export default { lenguaje, smsAvisoMG, smsAvisoEG,  smsIniJadi, smsIniJadi2, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsJoin1, smsJoin2, smsJoin}
