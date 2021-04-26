import React, { useState } from 'react';






const AddUser = props => {
    const [username, addUsername] = useState('');
    const [age, addAge] = useState('');

    const onUserChange = (event) => {
        addUsername(event.target.value);
    }
    
    const onAgeChange = (event) => {
        addAge(event.target.value);
    }

    const submitButtonHandler = (event) => {
        event.preventDefault();
        alert("submitted");
        props.onAddUser(username, age);
    }

    return(
        <form onSubmit={submitButtonHandler}>
            <label htmlFor="Username"> Username </label>
            <input id="username" type="text" onChange={onUserChange}></input>
            <label htmlFor="Age"> Age </label>
            <input id="age" type="number" onChange={onAgeChange}></input>
            <button type="submit"> Add User </button>
        </form>
    )
}

export default AddUser;