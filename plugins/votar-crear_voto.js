let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}


if (m.isGroup) {
//if (!text) throw await conn.reply(m.chat, `${mg}πΏππ½π πΏπ πππΎπππ½ππ ππΌ ππΌπππ πΏπ ππΌ ππππΌπΎπππ\n\nπππ ππππ πππππ πππ πππΌπππ πππ πππ ππππ`, fkontak,  m)	
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
return await conn.sendButton(m.chat, `ποΈ πππΏπΌπππΌ ππΌπ ππππΌπΎπππ ππππΏπππππ ππ ππππ πππππ!!`, wm, null, [
['π§Ύ ππππΌππππΌπ ππππΌπΎπππ', `${usedPrefix}-vote`]], fkontak, m)}
  
await conn.sendButton(m.chat, `β΄οΈ πππππΌ ππππΌπΎπππ β΄οΈ\n\n*CREADOR(A) DE LA VOTACIΓN*\nπ @${conn.getName(m.sender)}\n\n*MOTIVO β«* ${text}`, `
*Puede usar los comandos de abajo o los botones para hacer una acciΓ³n en la votaciΓ³n!!*

${htjava} πΏπππΌπππ ππΌ ππππΌπΎπππ ${htjava}
${dmenub} *${usedPrefix}sivotar | upvote* 
${dmenub} _Estar de acuerdo : Agree_
${dmenub2} *ββββββββββββ*
${dmenub} *${usedPrefix}novotar | devote*
${dmenub} _Estar en desacuerdo : Disagree_
${dmenub2} *ββββββββββββ*
${dmenub} *${usedPrefix}vervotos | cekvoto*
${dmenub} _Comprobar el voto : Check the vote_
${dmenub2} *ββββββββββββ*
${dmenub} *${usedPrefix}delvoto | deletevoto*
${dmenub} _Borrar votos : Delete votes_
${dmenuf}`, null, [
['β ππππΌπ πΌ ππΌπππ', `${usedPrefix}upvote`],
['β ππππΌπ ππ πΎπππππΌ', `${usedPrefix}devote`],
['π° ππππππΌπ πΌ ππππΌπ', `${usedPrefix}pedirayuda β΄οΈ @${conn.getName(m.sender)} *ESTA INVITANDO A QUE SE UNAN A LA VOTACIΓN!!*\n*USEN EL COMANDO ${usedPrefix}vervotos PARA VOTAR!!*`]
], fkontak, m) 
conn.vote[id] = [
text,
[],
[]
]
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|crear|iniciar|empezar|\+)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.register = true
handler.level = 4
handler.register = true
handler.limit = 1

export default handler 
