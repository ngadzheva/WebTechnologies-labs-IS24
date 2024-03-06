const ivan = {
    name: 'Ivan',
    age: 22
};

const pesho = {
    name: 'Pesho',
    age: 21
};

const gosho = {
    name: 'Gosho',
    age: 23,
    sayHi: () => console.log(`Hi, ${this.name}`)
};

name = 'Super global';

function greeting(a, b) {
    console.log(a + b)
    console.log(`Hello, ${this.name}!`);
}

// greeting();

ivan.greet = greeting;
// ivan.greet();

greeting.call(pesho, 8, 9);
greeting.apply([1, 5], gosho);

ivan.greet.call(gosho)

const hi = ivan.greet.bind(ivan);
hi();

const sayHi = function () {
    console.log("Hi");
}

const hello = a => a + 5

function sum(a) {
    return a + 5;
}

const hiGosho = gosho.sayHi;
hiGosho();

asdf = () => console.log(`Hi, ${this.name}`);

asdf()