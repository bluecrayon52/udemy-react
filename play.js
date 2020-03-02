class Human { 
    constructor() {
        this.gender = "Dude";
    }

    printMyGender() {
        console.log(this.gender); 
    }
}
class Person extends Human { 
    constructor() {
        super(); 
        this.name = "Nate";
        this.gender = "Gal"
    }

    printMyName() {
        console.log(this.name); 
    }
}

// const person = new Person(); 
// person.printMyName(); 
// person.printMyGender(); 

class Dog {
    name = 'Remi'; 
    printName = () => {
        console.log(this.name); 
    }
}

// const dog = new Dog();
// dog.printName();

const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6]; 
// console.log(newNumbers);

const obj = {
    prop1: 1
}

const newObj = { 
    ...obj, 
    prop2: 2
}

// console.log(newObj);

const filter = (...args) => {
    return args.filter(el => el === 1); 
}

// console.log(filter(1, 2, 3));

[num1, num2, ,num4] = numbers;
// console.log(num1, num2, num4);

const {prop1} = newObj;
// console.log(prop1);

const car1 = {
    name: 'Desire'
}

// point 
const car2 = car1; 

// copy
const car3 = {
    ...car1
}

car1.name = "Herbie"; 

// console.log(car2.name);
// console.log(car3.name); 

const doubleNums = numbers.map(num => num*2);
// console.log(doubleNums);

