//string
let nome = 'João'
console.log(nome)
// nome

//numbers
let idade = 27
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies = false
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// number



//array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
// object

hobbies = [100, 200, 300]


// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)

console.log(Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

