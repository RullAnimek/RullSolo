let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/0546d0a22559d832ed630.jpg'
let text = `ββκ₯γ *ππ΄ππ°* γκ₯ββ¬£

ββκ₯γ π·π°ππΆπ° ππ΄ππ° γ
β
ββΎ 7 Κα΄ΚΙͺ 5α΄ / Ι’Κα΄α΄α΄
ββΎ 30 Κα΄ΚΙͺ 20α΄ / Ι’Κα΄α΄α΄
ββΎ Permanent Κα΄ΚΙͺ 35α΄ / Ι’Κα΄α΄α΄
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ κ°Ιͺα΄α΄Κ 100+ γ
β
ββΎ α΄‘α΄Κα΄α΄α΄α΄
ββΎ α΄Ιͺα΄α΄
ββΎ α΄Ι΄α΄ΙͺΚΙͺΙ΄α΄
ββΎ κ±α΄Ιͺα΄α΄Κ
ββΎ κ±α΄α΄Ι΄α΄
ββΎ α΄Ι΄Ιͺα΄α΄
ββΎ κ±α΄Ι΄α΄ α΄ ΙͺΚα΄α΄x
ββΎ κ±α΄Ι΄α΄ Κα΄Ι’
ββΎ Ι’α΄α΄α΄ Κα΄Ι’
ββΎ α΄ΚΚ
β
βββκ₯ *${author}* κ₯ββ¬£
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klik Disini Untuk Sewa', url: `https://wa.me/6285607831412?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
