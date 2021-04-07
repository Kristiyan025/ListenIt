import styles from "./Logo.module.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo/label.svg';

const Logo = (props) => {
    let inlineStyle = {};
    if(props.width) inlineStyle.width = props.width;
    if(props.height) inlineStyle.height = props.height;
    return (
        <Link to="/">
            <div className={styles.logo} style={inlineStyle}>
                <img className={styles.img} src={logo} alt="Listen It - Logo"/>
            </div>
        </Link>
    );
};

export default Logo;