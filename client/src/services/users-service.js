const register = userData => {
    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    sendRequest('http://localhost:3001/users', options, redirect, handleError);
};

const redirect = () => {
    window.location = './login.html';
}