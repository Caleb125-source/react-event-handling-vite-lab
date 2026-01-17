// Code PasswordInput Component Here
import React from 'react';
import styles from '../styles/PasswordInput.module.css';

function PasswordInput (){
    const handleChange = () => {
        console.log("Entering password...");
    };
    return(
        <div>
        <input className={styles.input} type="password" onChange={handleChange} placeholder="Enter your password" />
        </div>
    );
}


export default PasswordInput;