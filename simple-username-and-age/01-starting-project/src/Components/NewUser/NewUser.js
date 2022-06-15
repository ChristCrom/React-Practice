import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './NewUser.module.css';
import buttonClasses from '../UI/Button.module.css';
import ErrorModal from '../Error/ErrorModale';

const NewUser = props => {
    const User = {
        username: '',
        age: ''
    };

    const[username, setUsername] = useState('');
    const[age, setAge] = useState('');
    const[error, setError] = useState();

  
    const addUserHandler = event =>{
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            setError(
               {
                    title: "Input Error!",
                    content: "Please enter a Valid Name or Age!"
                }
            );
            return;

        }
        if(+age < 1){
            setError(
                {
                   title: "Input Error!",
                   content: "Please enter a valid Age!"
               }
           );
            return;
        }
        console.log(User.age, User.username)
        props.onAddUser(username, age);
        setUsername('');
        setAge('');

    };
    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    };
    const ageChangeHandler = event => {
        setAge(event.target.value);
    };
    const errorHandler = event => {
        setError(null);
    };

    return (
    <div>
        {error && <ErrorModal title = {error.title} content= {error.content} onError = {errorHandler} />}
       <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
            <label htmlFor = "username">Username</label>
            <input id='username' type='text' value={username} onChange={usernameChangeHandler}></input>
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' value = {age} onChange={ageChangeHandler}></input>
            <button className={buttonClasses.button} >Add User</button>
         </form>
        </Card>
        </div>
    );

};

export default NewUser;