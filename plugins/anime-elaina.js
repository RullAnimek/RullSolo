import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/elaina?apikey=ApiRevita'
	conn.sendButton(m.chat, 'Done', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(elaina)$/i
handler.tags = ['anime']
handler.help = ['elaina']
handler.premium = false
handler.limit = true

export default handler