class Heroi {
    constructor(nome, tipo, idade){
      this.nome = nome
      this.tipo = tipo
      this.idade = idade
    }

    atacar(){
      	console.log(`O ${this.nome} atacou usando ${this.tipo}`)
    }
      
    saberIdade(){
    	console.log(`A idade do ${this.nome} eh ${this.idade}`)
    }
}

const mago = new Heroi("mago", "magia", "60")
const guerreiro = new Heroi("guerreiro", "espada", "25")
const monge = new Heroi("monge", "artes marciais", "45")
const ninja = new Heroi("ninja", "shuriken", "30")

mago.atacar()
guerreiro.atacar() 
monge.atacar()
ninja.atacar() 

mago.saberIdade()
guerreiro.saberIdade()
monge.saberIdade()
ninja.saberIdade()
