let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
β­βγ π *πͺππππππ * γββ¬£
β ${name} π¬π ππ πππππππ πππππ...
β *${global.db.data.users[who].limit} π«πππππππ(s)* π
β *${global.db.data.users[who].money} π³ππππππππ(s)* π
β *${global.db.data.users[who].exp} π¬πΏπ·* β‘
β *${global.db.data.users[who].joincount} π»ππππ(s)* πͺ
β°ββββγ *π  ${vs}* γββββ¬£`)

await conn.sendHydrated(m.chat, wm, `π·ππππ πππππππ ππΜπ πππππππππ πππππΜππππ πππππ πππππ πππππππ\n\nπͺπππππ ππππππππ πππ π¬πΏπ·\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nπͺπππππ ππππππππ πππ πππππππππ\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nπͺπππππ ππππππππ πππ πππππ\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu'],
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€  π«', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
