var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)

if (horas >= 0 && horas < 6){
    console.log('Boa Madrugada')
}else if (horas < 12) {
    console.log('Bom Dia!')
}else if (horas < 18) {
    console.log('Boa Tarde!')
}else if (horas <= 24 || horas == 0) {
    console.log('Boa Noite!')
}