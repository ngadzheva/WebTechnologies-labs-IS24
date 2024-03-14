const { User } = require('./user.js');

class Student extends User {
    #firstName;
    #lastName;
    #fn;

    constructor(username, email, password, firstName, lastName, fn) {
        super(email, username, password);

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

    get password() {
        return this.#fn;
    }
}
