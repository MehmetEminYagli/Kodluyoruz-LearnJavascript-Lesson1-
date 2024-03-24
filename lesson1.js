

let isim = prompt("isim giriniz")

const days = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let promter = document.querySelector("#hello")
const clock = document.querySelector("#clock")
let welcome = document.querySelector("#welcome")

promter.innerHTML = (`Merhaba, ${isim} Hoşgeldin!`)

function NowDay()
{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let hourShow = hour.toString().length == 1 ? "0"+hour.toStrin() : hour.toString()
    let minuteShow = minute.toString().length == 1 ? "0"+minute.toString() : minute.toString()
    let secondShow = second.toString().length == 1 ? "0"+second.toString() : second.toString()
    
    let dayShow = days[date.getDay()]
   
    let timeday = `${hourShow}:${minuteShow}:${secondShow} ${dayShow}`
    

    clock.innerHTML = timeday

}

welcome.innerHTML = ("tarihinde  <b> kodluyoruz fronted web development Patika'</b>nın Javascript bölümü 1.Ödevindesiniz")

setInterval(NowDay,10)