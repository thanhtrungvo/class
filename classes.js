class Greeter {
    
    constructor(message){
        this.greeting = message;
    }
    greet(){
        return(
            `Hello ${this.greeting}`
        )
    }
}

const greet1 = new Greeter('Diana');
const greet = greet1.greet();
console.log(greet)
