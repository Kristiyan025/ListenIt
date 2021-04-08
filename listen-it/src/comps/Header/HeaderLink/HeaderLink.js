import styles from './HeaderLink.module.css';
import { Link } from 'react-router-dom';

const HeaderLink = (props) => {
    let inlineStyle = {};
    for(const prop in props) {
        if(!['className', 'children', 'auth'].includes(prop)) inlineStyle[prop] = props[prop];
    }
    return (
        <li className={styles.listElement + (props.auth ? ` ${styles.auth}` : ` ${styles.normal}`)} style={inlineStyle}>
            <Link to={props.to} className={styles.link}>
                {props.children}
            </Link>
        </li>
    );
}

export default HeaderLink;