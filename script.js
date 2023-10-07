class Warrior {
    constructor (name,life,power) {
    this.name = name
    this.life = life
    this.power = power
}


attack() {
     console.log(`${this.name} ataca con un daño de ${this.power}`)
}

defend(damage) {
    this.life -= this.power
    console.log (`${this.name} recibe un daño de ${this.power}. Su vida restante es de ${this.life}`)
    

    
}
}

class Maya extends Warrior {
    

    drinkColacao() {
        console.log(`Goku se come una semilla y obtiene ${this.power + 10} puntos de daño`)
    }

}

class Aztec extends Warrior {
    
    drinkNesquik() {
        console.log(`Vegetta se come una semilla y obtiene ${this.life + 10} puntos de vida`)
    }

   
}

const Goku = new Maya ('Goku',100,30)
const Vegetta = new Aztec ('Vegetta',100,20)
 
Vegetta.drinkNesquik()
Goku.drinkColacao()
Goku.attack()
Vegetta.defend()
Vegetta.attack()
Goku.defend()
Goku.attack()
Vegetta.defend()
Vegetta.attack()
Goku.defend()



