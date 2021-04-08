import styles from './Icon.module.css';


const Icon = (props) => {

    return (
        <div className={styles.icon} style={{
            width: props.size,
            height: props.size
        }}></div>
    );
};

export default Icon;