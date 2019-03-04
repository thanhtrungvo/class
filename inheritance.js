class Animal{
    constructor(animal){
        this.animal = animal;
    }
    move(distance){
        console.log(`The ${this.animal} can move ${distance} km a night`)
    }
}
class Wolf extends Animal{
    constructor(gender, animal){
        super(animal)
        this.gender = gender;
    }
    moveClear(distance){
        console.log(`The ${this.gender} ${this.animal} can move ${distance} km a night`)
        super.move(distance)
    }
}
const wolf = new Wolf('femail', 'Wolf');
wolf.moveClear(200)
