function dwarfRollCall(dwarves) {

let dwarvesList = ""

for (let i = 0; i < dwarves.length; i++ ){
   dwarvesList +=  (`${[i + 1]}. ${dwarves[i]} `)
 }
console.log(dwarvesList)
 return dwarvesList
}

function summonCaptainPlanet(planeteerCalls){
let newArray = []
for (let i = 0; i < planeteerCalls.length; i++){


  newArray.push(`${planeteerCalls[i].toUpperCase()}!`)

}
  return newArray
}

function longPlaneteerCalls(words) {
  let statement = false
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      statement = true
    } else {
      statement = false
    }
    return statement
  }
}



function findTheCheese (foods) {
let cheeses = ["cheddar", "gouda"]
  for (let i = 0; i < foods.length; i++){
      for (let j = 0; j < cheeses.length; j++ ){
      if (foods[i] === cheeses[j])
      return foods[i]
    }
  }
    return "no cheese!"
}
