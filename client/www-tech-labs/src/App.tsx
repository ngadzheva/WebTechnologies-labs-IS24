import React from 'react';
import logo from './logo.svg';
import StudentsTable from './components/StudentsTable';
import './App.css';
import AddStudentsMark from './components/AddStudentsMark';

function App() {
  return (
    <main>
        <section>
            <header>Students Marks</header>

            <label id="success-message"></label>

            <StudentsTable />
        </section>

        <section>
            <header>Add New Student</header>

            <AddStudentsMark />
        </section>
    </main>
  );
}

export default App;
