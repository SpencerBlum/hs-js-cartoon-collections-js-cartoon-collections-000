

function dwarfRollCall(dwarves) {
let statement = ""
for (let i = 0; i < dwarves.length; i++){
  statement += `${1 + i}. ${dwarves[i]} `
}
return statement
}

function summonCaptainPlanet(planeteerCalls){
let newArray = []
for (let i = 0; i < planeteerCalls.length; i++){
  newArray.push(planeteerCalls[i].toUpperCase()+"!")
}
return newArray

}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    }
  }
return false
}

function findTheCheese (foods) {
let cheeses = ["gouda", "cheddar"]
  for (let i = 0; i < foods.length; i++){
    for (let j = 0; j < cheeses.length; j++){
      if (foods[i] === cheeses[j]){
      return foods[i]
      }
    }
  }
  return "no cheese!"
}
}
