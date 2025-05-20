
let pessoa = {
    nome: "Matheus",
    idade: "19",
    saudacao: function (){
        console.log("My name is " + this.nome + " and i'm " + this.idade + " years old")
    }
}

console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))