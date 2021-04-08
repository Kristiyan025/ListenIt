const mistakes = {
    invalidEmail: 'Email is required!',
    invalidPassword: 'Password must be bettween 6 and 20 symbols (included)!',
    missmatchedPasswords: 'Password do\'nt match!',
    unsuccessfullLog: 'Unsuccessfull sign in/sign up! Try again!'
};

export default mistakes;

const time = 5000;

export const pushMessage = (el) => {
    el.style.height = '1.5em';
    setTimeout(() => {
        el.style.height = '0';
    }, time);
};