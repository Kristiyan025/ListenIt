import styles from './Header.module.css';
import Wrapper from "../Wrapper";
import HeaderLink from './HeaderLink';
import Logo from '../Logo';
import { Fragment } from 'react';
import profilePic from '../../images/profile/sample-01.png';

const Header = ({ user }) => {
    const padding = '10px';
    const isLoggedIn = user !== '';
    
    return (
        <header className={styles.header}>
            <Wrapper className={`flexBetween ${window.innerWidth <= 1080 ? 'column' : ''}`} paddingTop={padding} paddingBottom={padding}>
                <Logo />
                <ul className={styles.navLinks}>
                    { isLoggedIn ? (
                        <Fragment>
                            <HeaderLink to="/my-playlists">
                                My Playlists
                            </HeaderLink>
                            <HeaderLink to="/history">
                                History
                            </HeaderLink>                            
                        </Fragment>) : ''}
                    <HeaderLink to="/about-us">
                        About Us
                    </HeaderLink>
                    <HeaderLink to="/contacts" borderRightWidth="2px">
                        Contacts
                    </HeaderLink>
                    { isLoggedIn ? (
                        <Fragment>
                            <HeaderLink to="/" auth="true" profilePic="true" width='130px' alignSelf="center">
                                {user.split('@')[0]}
                                <img className={styles.profilePic} src={profilePic} alt="Profile Pic" />
                            </HeaderLink>                           
                            <HeaderLink to="/log-out" auth="true">
                                Log Out
                            </HeaderLink>
                        </Fragment>) : (
                        <Fragment>
                            <HeaderLink to="/log-in" auth="true">
                                Log In
                            </HeaderLink>
                            <HeaderLink to="/sign-up" auth="true">
                                Sign Up
                            </HeaderLink> 
                        </Fragment> 
                    )}
                </ul>                
            </Wrapper>
        </header>
    );
};

export default Header;