function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = () => console.log(`Hello, ${this.name}`);
}

const ivan = new Person('Ivan', 22);
console.log(ivan.name);
console.log(ivan.age);
ivan.greeting();

const pesho = new Person('Pesho', 23);
ivan.greeting.call(pesho)

Person.prototype.info = function () {
    console.log(`${this.name}: ${this.age}`);
}

ivan.info();
pesho.info();

function Student(name, age, fn) {
    Person.call(this, name, age);

    this.fn = fn;

    let _mark;

    this.getMark = () => _mark;
    this.setMark = mark => _mark = mark;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.studentInfo = function () {
    this.info();
    console.log(this.fn);
};

const maria = new Student('Maria', 22, 666666);
console.log(maria.name)
console.log(maria.age)
maria.greeting();
maria.info();
maria.fn;
maria.studentInfo();

console.log(maria._mark)

maria.setMark(6)
console.log(maria.getMark())

ivan.studentInfo();