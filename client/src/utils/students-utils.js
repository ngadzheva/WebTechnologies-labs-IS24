const showStudents = studentsData => {
// Implement
    studentsData.forEach(student => {
        appendStudentTable({
            ...student,
            mark: student.mark[0].mark
        });
    });
};

function addStudent(event) {
    event.preventDefault();

    const firstName = document.getElementsByName('first-name')[0];
    const lastName = document.getElementsByName('last-name')[0];
    const fn = document.getElementsByName('fn')[0];
    const mark = document.getElementsByName('mark')[0];

    const studentInfo = new Student(firstName.value, lastName.value, fn.value);
    studentInfo.mark = [{ mark: mark.value, subject: 'Web Technologies' }];

    console.log(studentInfo)
    const studentData = {
        firstName: studentInfo.firstName,
        lastName: studentInfo.lastName,
        fn: studentInfo.fn,
        mark: studentInfo.mark
    };
    // Make request
    const options = {
        method: 'POST',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    };
    sendRequest('http://localhost:3001/students', options, appendStudentTable, handleError);

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
    deleteButton.addEventListener('click', deleteStudent);

    const actionTd = document.createElement('td');
    actionTd.appendChild(deleteButton);

    const studentRow = document.createElement('tr');
    studentRow.setAttribute('class', 'student');

    studentRow.append(firstNameTd, lastNameTd, fnTd, markTd, actionTd);

    const tbody = document.getElementsByClassName('student')[0].parentNode;

    tbody.append(studentRow);
}

function deleteStudent(event) {
    // Make request
    const studentToDelete = event.target.parentNode;
    const studentFn = studentToDelete.previousSibling.previousSibling.innerHTML;

    const options = {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin'
    };

    sendRequest(`http://localhost:3001/students/${studentFn}`, options, handleSuccessMessage, handleError)

    const targetRow = studentToDelete.parentNode;
    targetRow.parentNode.removeChild(targetRow);
}