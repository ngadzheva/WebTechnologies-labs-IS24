// for (var i = 0; i <= 5; ++i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// for (let i = 0; i <= 5; ++i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

const fs = require('fs');

const editStudentsData = (data) => data.replace(/2/g, '7');

let result = '';

fs.readFile('./js examples/students.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log('FILE READ')

    result = editStudentsData(data);

    console.log('DATA EDITED')

    fs.writeFile('./js examples/editedStudents.txt', result, 'utf-8', (error) => {
        if (error) {
            console.log(error);
            return;
        }
    
        console.log('FILE WRITTEN')

        fs.readFile('./js examples/editedStudents.txt', 'utf-8', (error, data) => {

        })
    });
});


console.log('DONE');

const read = (path, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        });
    });
};

const write = (path, data, encoding) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, encoding, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}

read('./js examples/students.txt', 'utf-8')
    .then((data) => editStudentsData(data))
    .then(editedData => write('./js examples/promisedEditedStudents.txt', editedData, 'utf-8'))
    .then(() => console.log('Students edited successfully'))
    .catch(error => console.error(error));

async function editStudents() {
    try {
        const studentsData = await read('students.txt', 'utf-8');

        const editedData = editStudentsData(studentsData);

        await write('./js examples/asyncEditedStudents.txt', editedData, 'utf-8');

        console.log('Students edited successfully');
    } catch (error) {
        console.error(error);
    }
}

editStudents();
