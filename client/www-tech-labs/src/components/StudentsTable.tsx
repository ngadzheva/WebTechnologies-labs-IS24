import React, { useEffect, useState } from 'react';
import IStudent from '../../../../shared/interfaces/student';
import { studentsService } from '../services/students-service';
import Button from './Button';

export default function StudentsTable() {
    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
       const fetch = async () => {
           const studentsData = await studentsService.getStudents();

           setStudents(studentsData.data);
       }

       if (students.length === 0) {
           fetch();
       }
    }, [students]);

    const deleteStudent = async (fn: number) => {
        const result = await studentsService.deleteStudents(fn);

        if (result.status === 200) {
            const updatedStudents = students.filter(student => student.fn !== fn);

            setStudents(updatedStudents);
        }
    }

    return (
        <table>
            <thead>
                <tr id='header-row'>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Faculty Number</th>
                    <th>Mark</th>
                    <th id='delete-header'>Action</th>
                </tr>
            </thead>
            <tbody className="student">
                {students.map(student => {
                    return (
                        <tr className='student' key={student.fn}>
                            <td className='first-name'>{student.firstName}</td>
                            <td className='last-name'>{student.lastName}</td>
                            <td className='fn'>{student.fn}</td>
                            <td className='mark'>{student.mark.map(mark => mark.mark)}</td>
                            <td className='delete'>
                                <Button label='Delete Student' handleClick={(_: React.MouseEvent) => deleteStudent(student.fn)} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}