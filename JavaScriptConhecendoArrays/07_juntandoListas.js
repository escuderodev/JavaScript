const pares = [2,4,6,8,10]
const impares = [1,3,5,7,9]
const todosOsNumeros = pares.concat(impares)

console.log(todosOsNumeros.sort(comparaNumeros))

function comparaNumeros(a,b) { 
    if(a == b) {
        return 0
    } else if(a < b) {
        return -1
    } else {
        return 1
    }
}