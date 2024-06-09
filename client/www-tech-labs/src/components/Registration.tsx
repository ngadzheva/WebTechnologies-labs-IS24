import React from 'react';

export default function Registration() {
    return (
        <main>
            <header>
                <nav>
                    <a href="#">Login</a>
                </nav>
            </header>
            <section>
                <header id="main-header">Register</header>

                <fieldset>
                    <form id="register-form">
                        <label id="error-message"></label>
                        <label>User Name</label>
                        <input type="text" id="user-name" name="userName"/>
                        <label>Password</label>
                        <input type="password" id="password" name="password"/>
                        <label>Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password"/>
                        <label>Email</label>
                        <input type="text" id="email" name="email"/>
                        <button id="register">Register</button>
                    </form>
                </fieldset>
            </section>
        </main>
    )
}