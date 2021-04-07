import styles from './Link.module.css';
import { Link as A } from 'react-router-dom';

const Link = (props) => {
    if(props.to[0] === '/') {
        return (
            <li className={styles.listItem}>
                <A to={props.to} className={styles.link}>
                    {props.children}
                </A>
            </li>
        );
    }

    return (
        <li className={styles.listItem}>
            <a href={props.to} className={styles.link}>
                {props.children}
            </a>
        </li>
    );
};

export default Link;