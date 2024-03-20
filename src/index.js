function load() {
    console.log('Loaded');
}

window.onload = function () {
    console.log('Window loaded')
}

load();

(function () {
    console.log('IIFE loaded')

    const studentsHeader = document.getElementsByTagName('header')[0];
    studentsHeader.innerHTML += ' Marks';
    studentsHeader.style.fontWeight = 'bold';
    studentsHeader.style.fontSize = '22px';
    console.log(studentsHeader)

    const deleteHeader = document.getElementById('delete-header');
    const markTh = document.createElement('th');
    const markText = document.createTextNode('Mark');
    markTh.appendChild(markText);
    console.log(markTh)
    deleteHeader.before(markTh);

    const markTd = document.createElement('td');
    markTd.innerText = '6';
    markTd.setAttribute('id', 'mark');
    const fnTd = document.getElementById('fn');
    fnTd.after(markTd);

    const deleteButton = document.querySelector('#delete button');
    console.log(deleteButton)
    deleteButton.addEventListener('click', deleteStudentRow);

    const addButton = document.getElementById('submit');
    addButton.addEventListener('click', function (event) {
        event.preventDefault();
        loadStudentData();
    })
})();

function deleteStudentRow(event) {
    const targetRow = event.target.parentNode.parentNode;
    console.log(targetRow)
    targetRow.parentNode.removeChild(targetRow);
}

function loadStudentData() {
    const firstName = document.getElementsByName('first-name')[0];
    const lastName = document.getElementsByName('last-name')[0];
    const fn = document.getElementsByName('fn')[0];
    const mark = document.getElementsByName('mark')[0];

    const student = {
        firstName: firstName.value,
        lastName: lastName.value,
        fn: fn.value,
        mark: mark.value,
    }

    console.log(student)

    appendStudentTable(student);

    firstName.value = '';
    lastName.value = '';
    fn.value = '';
    mark.value = '';
}

function appendStudentTable(student) {
    const firstNameTd = document.createElement('td');
    firstNameTd.innerHTML = student.firstName;

    const lastNameTd = document.createElement('td');
    lastNameTd.innerHTML = student.lastName;

    const fnTd = document.createElement('td');
    fnTd.innerHTML = student.fn;

    const markTd = document.createElement('td');
    markTd.innerHTML = student.mark;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteStudentRow);

    const actionTd = document.createElement('td');
    actionTd.appendChild(deleteButton);

    const studentRow = document.createElement('tr');
    studentRow.setAttribute('class', 'student');

    studentRow.append(firstNameTd, lastNameTd, fnTd, markTd, actionTd);

    const tbody = document.getElementsByClassName('student')[0].parentNode;
    console.log(tbody)

    tbody.append(studentRow);
}