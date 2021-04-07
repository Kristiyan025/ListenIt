import styles from './Column.module.css';

const Column = (props) => {
    return (
        <li className={styles.listItem}>
            <h2 className={styles.title}>
                {props.name}
            </h2>
            <ul className={styles.links + (props.className && props.className.includes('icons') ? ` ${styles.icons}` : '')}>
                {props.children}
            </ul>
        </li>
    );
};

export default Column;