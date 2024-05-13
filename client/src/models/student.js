// const { User } = require('./user.js');

class Student {
    #firstName;
    #lastName;
    #fn;
    #mark;

    constructor(firstName, lastName, fn) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#fn = fn;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get fn() {
        return this.#fn;
    }

    get mark() {
        return this.#mark;
    }

    set mark(mark) {
        this.#mark = mark;
    }
}
