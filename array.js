var frutas = ['Mora', 'papaya', 'Pera', 'Cereza']

var masFrutas = frutas.push('Lulo') // Agrega elemento nuevo al final

var masFrutas2 = frutas.unshift('Banano') // Agrega elemento nuevo al inicio

var eliminarFrutas = frutas.pop() // Elimina el ultimo elemento del arreglo

var eliminarFrutas2 = frutas.shift() // Elimina el primer elemento del arreglo

console.log(frutas.length)

function fruticas(fruta){
    console.log(`Me gusta la ${fruta}`)
}


for(var i = 0; i < frutas.length; i++){
    fruticas(frutas[i])
}


console.log('---------For OF--------')
// Recorre los valores de un objeto iterable
for(var fruta of frutas){
    console.log(fruta)
}

console.log('---------WHILE--------')

function eliminaFrutas(fruta){
    console.log(`Ya no me gusta la ${fruta} `)
}

while(frutas.length > 0){
    var fruta = frutas.shift();
    eliminaFrutas(fruta)
}
