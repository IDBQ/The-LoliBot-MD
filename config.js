import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs'

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰ 
global.owner = [
  ['595984664076', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', true],
  ['573183650526', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', true],
  ['972529277479', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', true],
  ['972529277406'],
  ['12264575501'] 
]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = ['50495745934'], 

global.APIs = { // API Prefix.
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  'https://violetics.pw': 'beta'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//⊱ ━━━━━.⋅ KEY ⋅.━━━━ ⊰

global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
//global.beta = ['https://violetics.pw'] //keys ephoto360

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'toma tu stickers'
global.author = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.2.27'
global.version = vs

global.gt = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
global.gatabot = gt

global.yt = 'https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw'
global.youtube = yt

global.ig = ''
global.gatadiosig = ig

global.md = 'https://github.com/elrebelde21/The-LoliBot-MD'
global.gatabot = md

global.nn = 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
global.nngrupo = nn //Grupo 1

global.nnn = 'https://chat.whatsapp.com/Ef6oVLqkDQvBZItFFJ0wLh'
global.nnngrupo = nnn //Grupo 2

global.paypal = 'https://paypal'
global.donar = paypal

//global.gataimg = fs.readFileSync('./media/menus/Menu3.jpg')

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰
global.rg = '╰⊱✅⊱ *𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝑨𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂𝒔* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝑰𝒏𝒇𝒐𝒎𝒂𝒄𝒊𝒐𝒏* ⊱❕⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝑭𝒂𝒍𝒍𝒐 | 𝒆𝒓𝒓𝒐𝒓* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝑳𝒐 𝒖𝒔𝒐 𝒎𝒂𝒍* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝑹𝒆𝒑𝒐𝒓𝒕𝒆* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝑬𝒙𝒊𝒕𝒐𝒔* ⊱💚⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información⋅.━━━━ ⊰

global.wm = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
global.igfg = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
global.wait = '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━lolkeys━━━━━━━━━

global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '

global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             }

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️ Agilidad : Agility',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      ayam: '🐓 Pollo : Chicken',
      //armordurability: '🤺 ',
      babi: '🐖 Puerco : Pig',
      bank: '🏦 Banco : Bank',
      Jabali: '🐗 Jabalí : Wild Boar',
      bibitanggur: '🍇 Semilla de Uva : Grapeseed',
      bibitapel: '🍎 Semilla de Manzana : Apple Seed',
      bibitjeruk: '🍊 Semillas de naranja : Orange Seeds',
      bibitmangga: '🥭 Semilla de Mango : Mango Seed',
      bibitpisang: '🍌 Semillas de Plátano : Banana Seeds',
      bow: '🏹 Super Arco : Super Bow',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: '🐈 Gato : Cat',      
      centaur: '🐐 Centauro : Centaur',
      chicken: '🐓 Pollo : Chicken',
      common: '📦 Caja Común : Common Box',
      cow: '🐄 Vaca : Cow',
      crystal: '🔮 Cristal : Crystal',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      diamond: '💎+ Diamante+ : Diamond+',
      dog: '🐕 Perro : Dog',
      dragon: '🐉 Dragón : Dragon',
      elephant: '🐘 Elefante : Elephant',
      emerald: '💚 Esmeralda : Emerald',
      exp: '⚡ Experiencia : Exp',
      emas: '🪅 Piñata : Doll',
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      fox: '🦊 Zorro : Fox',
      gems: '🍀 Gemas : Gemas',
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: '🦅 Ave : Griffin', //Mascota : Griffin',
      gold: '👑 Oro : Gold',
      health: '❤️ Salud : Health',
      horse: '🐎 Caballo : Horse',
      intelligence: '🧠 Inteligencia : Intelligence',
      iron: '⛓️ Hierro : Iron',
      kambing: '🐐 Cabra : Goat',
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      kerbau: '🐃 Búfalo : Buffalo',
      kyubi: '🌀 Magia : Magic',
      knife: '🔪 Cuchillo : Knife',
      legendary: '🎁 Caja Legendaria : Legendary Box',
      level: '🧬 Nivel : Level',
      limit: '💎 Diamante : Diamond',
      lion: '🦁 León : Lion',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      money: '🐱 GataCoins : CatCoins',
      monyet: '🐒 Mono : Monkey',
      mythic: '🗳️ Caja Mítica : Mythic Box',
      panda: '🐼 Panda',
      pet: '🍱 Caja para Mascota : Pet Box',
      petFood: '🍖 Alimento para Mascota : Pet Food',
      premium: '🎟️ Premium',
      pickaxe: '⛏️ Pico : Peak',
      pointxp: '📧 Puntos Exp : Point Xp',
      potion: '🥤 Poción : Potion',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      rock: '🪨 Roca : Rock',
      robo: '🚔 Robo : Robo',
      role: '💪 Rango | Role',
      ramuan: '🧪 Ingredientes : Ingredients',
      snake: '🐍 Serpiente : Snake',
      stamina: '🦾 Aguante : Stamina',
      strength: '🦹‍ ♀️ Fuerza : Strength',
      string: '🕸️ Cuerda : Cuerda',
      superior: '💼 Superior : Superior',
      sword: '⚔️ Espada : Sword',
      tiger: '🐅 Tigre : Tiger',
      joincount: '🪙 Token',
      trash: '🗑 Basura : Trash',
      uncoommon: '🥡 Caja Poco Común : Uncommon',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wolf: '🐺 Lobo : Wolf',
      wood: '🪵 Madera : Wood'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      ayam: '🐓',
      //armordurability: '🤺 ',
      babi: '🐖',
      bank: '🏦',
      Jabali: '🐗',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      buaya: '🐊',  
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎+',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '⚡',
      emas: '🪅',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      griffin: '🦅',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      kambing: '🐐',
      keygold: '🔑',
      keyiron: '🗝️',
      kerbau: '🐃',
      kyubi: '🌀',
      knife: '🔪',
      legendary: '🎁',
      level: '🧬',
      limit: '💎',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '🐱',
      monyet: '🐒',
      mythic: '🗳️',
      panda: '🐼',
      pet: '🍱',
      petFood: '🍖',
      premium: '🎟️',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      phonix: '🕊️',
      rhinoceros: '🦏',
      rock: '🪨',
      robo: '🚔',
      role: '💪',
      ramuan: '🧪',
      snake: '🐍',
      stamina: '🦾',
      strength: '🦹‍ ♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      joincount: '🪙',
      trash: '🗑',
      uncoommon: '🥡',
      upgrader: '🧰',
      wolf: '🐺',
      wood: '🪵'      
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: '⚡ Experiencia',
      limit: '💎 Diamante',
      diamond: '💎+ Diamante+',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Joya',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      money: '🐱 LoliCoins',
      tiketcoin: '🎫 Loli Tickers',
            
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Basura',
      wood: '🪵 Madera',
      rock: '🪨 Roca',
      batu: '🥌 Piedra',
      string: '🕸️ Cuerda',
      iron: '⛓️ Hierro',
      coal: '⚱️ Carbón',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      
      eleksirb: '💡 Electricidad',
      emasbatang: '〽️ Barra de Oro',
      emasbiasa: '🧭 Oro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madera',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada', 
      healtmonster: '💵 Billetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
       
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítica',
      pet: '📫 Caja de Mascotas',//?
      gardenboxs: '💐 Caja de Jardinería',//?
      legendary: '🎁 Caja Legendaria',
      
      anggur: '🍇 Uva',
      apel: '🍎 Manzana',
      jeruk: '🍊 Naranja',
      mangga: '🥭 Mango',
      pisang: '🍌 Banana',
      
      bibitanggur: '🌾🍇 Semillas de uva',
      bibitapel: '🌾🍎 Semillas de manzana',
      bibitjeruk: '🌾🍊 Semillas de naranja',
      bibitmangga: '🌾🥭 Semillas de Mango',
      bibitpisang: '🌾🍌 Semillas de plátano',
      
      centaur: '🐐 Centauro : Centaur',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragón',
      fox: '🦊 Zorro',
      kuda: '🐎 Caballo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Perro',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖 Alimento para Mascota', //?
      makanancentaur: '🐐🥩 Comida de Centauro : Centauro Food',
      makanangriffin: '🦅🥩 Comida de Ave : Griffin Food',
      makanankyubi: '🌀🥩 Comida Mágica : Magic Food',
      makanannaga: '🐉🥩 Comida de Dragón : Dragon Food',
      makananpet: '🍱🥩 Alimentos de mascotas: Pet Food',
      makananphonix: '🕊️🥩 Comida de Fénix : Phoenix Food'  
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '🐱',
      tiketcoin: '🎫',
            
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱', 
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
       
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: '🍖', //?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("se actualizo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
