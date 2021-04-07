import styles from './Header.module.css';
import Wrapper from "../Wrapper";
import HeaderLink from './HeaderLink';
import Logo from '../Logo';

const Header = () => {
    let padding = '10px';
    return (
        <header className={styles.header}>
            <Wrapper className="flexBetween" paddingTop={padding} paddingBottom={padding}>
                <Logo />
                <ul className={styles.navLinks}>
                    <HeaderLink to="/">
                        My Playlists
                    </HeaderLink>
                    <HeaderLink to="/">
                        About Us
                    </HeaderLink>
                    <HeaderLink to="/" borderRightWidth="2px">
                        Contacts
                    </HeaderLink>
                    <HeaderLink to="/" auth="true">
                        Log In
                    </HeaderLink>
                    <HeaderLink to="/" auth="true">
                        Sign Up
                    </HeaderLink>
                </ul>                
            </Wrapper>
        </header>
    );
};

export default Header;