import { useReducer, useState } from 'react';
import useInterval from './useInterval';



const useEmailValidation = (maxSeconds) => {
    const validateEmail = (email) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(email);
    };

    const [emailValid, setEmailValid] = useState(false);
    const emailReducer = (state, action) => {
        const isValidEmail = validateEmail(action);
        setEmailValid(isValidEmail);
        return action;
    };

    const [email, setEmail] = useReducer(emailReducer, '');
    //const maxSeconds = 30;
    const [count, setCount] = useState(maxSeconds);

    useInterval(() => {
        setCount(count - 1);
    }, 1000);

    return { email, count, setCount, setEmail, emailValid };
};


export default useEmailValidation;