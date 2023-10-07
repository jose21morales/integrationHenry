import style from './Form.module.css';
import React, { useState } from 'react';
import { ValidateEmail, ValidatePassword } from './validation';

export default function Form(props) {
    const [userData, setUserData] = useState({
       email: '',
       password: ''
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault().
        props.login(userData);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;

        setUserData({...userData, email:value});
        ValidateEmail(userData, setErrors, errors);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;

        setUserData({...userData, password:value});
        ValidatePassword(userData, setErrors, errors);
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.label} htmlFor="username">Username:</label>
            <input
            className={style.input}
            type="text"
            name='email'
            placeholder='Email...'
            value={userData.email}
            onChange={handleEmailChange} />
            {errors.email && <p className={style.errors}>{errors.email}</p>}

            <label className={style.label} htmlFor="password">Password:</label>
            <input
            className={style.input}
            type="text"
            name='password'
            placeholder='Password...'
            value={userData.password}
            onChange={handlePasswordChange} />
            {errors.password && <p className={style.errors}>{errors.password}</p>}
            
            <button type='submit' className={style.button}>Submit</button>
        </form>
    );
}