class User {
    #email;
    #username;
    #password;

    constructor(email, username, password) {
        this.#email = email;
        this.#username = username;
        this.#password = password;
    }

    get password() {
        return this.#password;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }
}

module.exports = { User };
const user = new User('jsfjd@jgkdf', 'gfjdgk', 'djgdkgkd')
user.email = 'osfkodlkf';
console.log(user.email)