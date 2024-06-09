import React from 'react';

export default function Login() {
    return (
        <>
            <form>
                <label>Username</label>
                <input type="text" id="username" name="username" />
                <label>Password</label>
                <input type="password" id="password" name="password" />
                <label>Remember me</label>
                <input type="checkbox" id="remember-me"/>
                <button id="login"></button>
            </form>
            <div id="error-message"></div>
        </>
    )
}