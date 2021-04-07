import styles from './Wrapper.module.css';

const Wrapper = (props) => {
    let classes = [styles.wrapper];
    if(props.className) {
        if(props.className.includes('flexible')) 
            classes.push(styles.flexible);
        if(props.className.includes('flexCenter')) 
            classes.push(styles.flexCenter);
        if(props.className.includes('flexBetween')) 
            classes.push(styles.flexBetween);       
        if(props.className.includes('flexAround')) 
            classes.push(styles.flexAround);     
    }
    let inlineStyle = {};
    for(const prop in props) {
        if(!['className', 'children'].includes(prop)) {
            inlineStyle[prop] = props[prop];
        }
    }
    return (
        <section className={classes.join(' ')} style={inlineStyle}>
            {props.children}
        </section>
    );
};

export default Wrapper;