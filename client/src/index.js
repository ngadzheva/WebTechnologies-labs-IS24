(function () {
    const studentsHeader = document.getElementsByTagName('header')[0];
    studentsHeader.innerHTML += ' Marks';
    studentsHeader.style.fontWeight = 'bold';
    studentsHeader.style.fontSize = '22px';

    const deleteHeader = document.getElementById('delete-header');
    const markTh = document.createElement('th');
    const markText = document.createTextNode('Mark');
    markTh.appendChild(markText);
    deleteHeader.before(markTh);

    // const markTd = document.createElement('td');
    // markTd.innerText = '6';
    // markTd.setAttribute('id', 'mark');
    // const fnTd = document.getElementById('fn');
    // fnTd.after(markTd);

    // const deleteButton = document.querySelector('#delete button');
    // deleteButton.addEventListener('click', deleteStudent);

    const addButton = document.getElementById('submit');
    addButton.addEventListener('click', addStudent);

    // Load students
    const options = { 
        method: 'GET', 
        mode: 'cors', 
        credentials: 'same-origin' 
    };
    sendRequest('http://localhost:3001/students', options, showStudents, redirect);
})();

function redirect(error) {
    console.log(error)
    // window.location = './login.html';
}
