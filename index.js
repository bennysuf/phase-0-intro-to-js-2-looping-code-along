// Code your solutions in this file
// let names = ["Guadalupe", "Ollie", "Aki"]
// let gasp = "surprise"
function writeCards(names, gasp) {
    let cards = []
    let myNames = names
    let myGasp = gasp
    for (let i = 0; i < myNames.length; i++) {
      cards.push(`Thank you, ${myNames[i]}, for the wonderful ${myGasp} gift!`)
} 
return cards
}
writeCards(["Guadalupe", "Ollie", "Aki"], surprise)


function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i);
        i--
    }
}
