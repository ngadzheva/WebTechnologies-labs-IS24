import React from 'react';

export default function AddStudentsMark() {
    return (
        <fieldset>
            <legend>Add Student's Mark</legend>
            <form className='student'>
                <label id='error-message'></label>
                <label>First Name</label>    
                <input id="first-name" type='text' name='first-name'/>
                <label>
                    Last Name
                    <input type='text' name='last-name'/>
                </label>    

                <label>Faculty Number</label>    
                <input type='number' name='fn'/>
                <label>Mark</label>    
                <input type='number' name='mark'/>
                <input id="submit" type='submit' name='add' value='Add'/>
            </form>    
        </fieldset>
    )
}