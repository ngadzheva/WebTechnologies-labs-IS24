const { Person } = require('./person.js');

// const obj = {a: 2, b: 6, c: 5};
// const d = obj.b;
// const { b, a, c, f = 8 } = obj;
// console.log(b)
// console.log(f)

class Student extends Person {
    mark$;

    constructor(name, age, fn) {
        super(name, age);

        this.fn = fn;
    }

    getMark() {
        return this.mark$;
    }

    setMark(mark) {
        this.mark$ = mark;
    }

    studentInfo() {
        super.info();
        console.log(this.fn)
    }
}

const maria = new Student('MAria', 23, 666666);
maria.info();
maria.setMark(6);
maria.getMark();
maria.studentInfo();

console.log(maria.mark$);