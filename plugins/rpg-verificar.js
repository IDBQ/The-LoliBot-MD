import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `β³οΈ Ya estΓ‘s registrado\n\nΒΏQuiere volver a registrarse?\n\n π Use este comando para eliminar su registro \n*${usedPrefix}unreg* <NΓΊmero de serie>`
  if (!Reg.test(text)) throw `β οΈ Formato incorrecto\n\n β³οΈ Uso del comamdo: *${usedPrefix + command} nombre.edad*\nπEjemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'β³οΈ El nombre no puede estar vacΓ­o'
  if (!age) throw 'β³οΈ La edad no puede estar vacΓ­a'
  if (name.length >= 30) throw 'β³οΈ El nombre es demasiado largo' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» Wow el abuelo quiere jugar al bot'
  if (age < 5) throw 'πΌ  los bebes saber escribir π³ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
ββ ββββββββββββ β β
βγ πππ§ππππππ§ γ
β£β ββββββββββββ β β
β *π΅πΆπ΄π©πΉπ¬:* ${name}
β *π¬π«π¨π«:* ${age} aΓ±os
β  *π©πΆπ΅πΆ* 
β *$350 XP*
β *$200 π³πΆπ³π°πͺπΆπ°π΅πΊ*
β *$2 π«π°π¨π΄π¨π΅π»π¬*
β *ππͺΜπ’ππ§π€ ππ π¨ππ§ππ:* 
β ${sn}
ββ ββββββββββββ β β
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
