let res = document.getElementById("res")

let pais = ["Chile","Bolivia","Brasil","Argentina","Paraguai"]
let cidades = new Array("tijucas","Itajai", "São josé")

// console.log(pais(2))
// console.log(cidade(1))


pais.push("Uruguai")
pais.unshift("Colombia")
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)

function inserir(){
    
    pais.pop()
    pais.shift()
    res.innerHTML += pais + " </br>"
    res.innerHTML += cidades + "</br>"
}
