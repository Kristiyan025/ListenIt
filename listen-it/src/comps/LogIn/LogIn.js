import styles from './LogIn.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../user';
import mistakes, { pushMessage } from '../../wrong';
import Wrapper from '../Wrapper';

const LogIn = ({ history }) => {
    const padding = '80px';

    const submitHandler = (e) => {
        e.preventDefault();
        
        let email = e.target.email.value;
        let password = e.target.password.value;
        let isValid = true;
        
        if(!email) {
            isValid = false;
            document
                .querySelectorAll(`.${styles.invalidEmail}`)
                .forEach(x => pushMessage(x));
        }

        if(password.length < 6 || password.length > 20) {
            isValid = false;
            document
                .querySelectorAll(`.${styles.invalidPassword}`)
                .forEach(x => pushMessage(x));
        }

        if(isValid) {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    history.push('/');
                })
                .catch((error) => {
                    history.push('/log-in');
                    document
                        .querySelectorAll(`.${styles.unsuccessfullLog}`)
                        .forEach(x => pushMessage(x));
                });
        } else {
            history.push('/log-in');
        }
    };

    return (
        <section className={styles.section}>
            <Wrapper className="flexCenter" paddingTop={padding} paddingBottom={padding}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <legend className={styles.title}>
                        Log In
                    </legend>
                    <hr className={styles.hr} />
                    <ul className={styles.allMistakes}>
                        <li className={styles.invalidEmail}>{mistakes.invalidEmail}</li>
                        <li className={styles.invalidPassword}>{mistakes.invalidPassword}</li>
                        <li className={styles.unsuccessfullLog}>{mistakes.unsuccessfullLog}</li>
                    </ul>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input type="email" name="email" className={styles.formInput} placeholder="ivan043@abv.bg"/>
                        <span className={`${styles.mistake} ${styles.invalidEmail}`}>{mistakes.invalidEmail}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>
                            Password
                        </label>
                        <input type="password" name="password" className={styles.formInput} placeholder="123456"/>
                        <span className={`${styles.mistake} ${styles.invalidPassword}`}>{mistakes.invalidPassword}</span>
                    </div>
                    <button type="submit" className={styles.button}>
                        Log In
                    </button>
                    <hr className={styles.hr} />
                    <p className={styles.redirect}>
                        Don't have an account yet? <Link to="/sign-up" className={styles.link}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Wrapper>
        </section>
    );
};

export default LogIn