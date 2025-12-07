'user strict'

// let objectProt = {
//     name5: 'Oleks',
//     age: 34,
// }
// let newObj = Object.create(objectProt)

// newObj = {
//     data : '22.12.4',
// }
// console.log(newObj);


// class Animal {
//     сonstructor(name){
//         this.name = name;
//     }
//             Speak(){
//             console.log(` uuh j ${this.name}`);
//         }
// }

// class Dog extends Animal{

// // }

// // let gami = new Dog('gami')
// const Array = [23, 3434, 534, 2];

// Array.prototype.mulBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }




// class Animal{
//     static type = 'Animal'
//     constructor(option) {
//         age = option.age;
//         name = option.name
//     }
//     makeSound() {
//         console.log('');
//     }
// }


// class Cat extends Animal{
//     constructor(color) {
//         super(option)
//         color = this.color
//     }
//     makeSound() {
//         super.makeSound();
//     }

// }

// const Monkey = new Animal(age = 22,name = 'alex')
let url = 'https://jsonplaceholder.typicode.com/todos'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// function fetchTodos() {
//     console.log('start fetching');
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }

// fetchTodos()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.error(err));


let a;

const person = {
    firstName: 'Oleksandr',
    age: 16,
    adress: 'Lviv'
}

const p = new Proxy(person, {
    get(target, prop) {
        console.log(` getting prop ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value 
        }
        else {
            throw new Error(`no particular prop`)
        }
    }
})

const logText = (text) => console.log(`printing ${text}`);

const fp = new Proxy(logText, {
    
})