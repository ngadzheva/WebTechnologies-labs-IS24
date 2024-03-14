class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, ${this.name}`);
    }

    info() {
        console.log(`${this.name}: ${this.age}`);
    }
}

const ivan = new Person('Ivan', 22);
ivan.greeting();

module.exports = { Person };