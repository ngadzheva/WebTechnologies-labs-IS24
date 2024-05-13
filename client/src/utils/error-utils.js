const handleError = error => {
    const errorLabel = document.getElementById('error-message');

    errorLabel.innerHTML = error;
    errorLabel.style.color = 'red';
};