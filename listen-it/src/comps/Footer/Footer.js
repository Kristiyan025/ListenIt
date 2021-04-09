import styles from './Footer.module.css';
import Wrapper from '../Wrapper';
import Column from './Column';
import Link from './Column/Link';

const Footer = () => {
    
    return (
        <footer className={styles.footer}>
            <Wrapper 
                className="flexible" 
                flexDirection="column" 
                alignItems="center" 
                paddingTop="100px" 
                paddingBottom="50px">
                <ul className={styles.columns}>
                    <Column name="Pages">
                        <Link to="/">
                            Home page
                        </Link>
                        <Link to="/about-us">
                            About Us
                        </Link>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </Column>
                    <Column name="Community">
                        <Link to="https://www.musicbanter.com/">
                            Music Banter
                        </Link>
                        <Link to="https://www.pgmusic.com/forums/">
                            PG Music
                        </Link>
                        <Link to="http://www.buzzjack.com/forums/">
                            BuzzJack
                        </Link>
                        <Link to="https://www.ticketmaster.com/discover/concerts/">
                            Concerts
                        </Link>
                    </Column>
                    <Column name="Recommended">
                        <Link to="https://music.youtube.com/">
                            You Tube Music
                        </Link>
                        <Link to="https://www.spotify.com/">
                            Spotify
                        </Link>
                        <Link to="https://soundcloud.com/">
                            Sound Cloud
                        </Link>
                    </Column>
                    <Column name="Follow us on:" className="icons">
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-facebook-f'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-instagram'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-twitter'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-linkedin'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-pinterest'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-google-plus'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-youtube'}></i>
                        </Link>
                        <Link to="/media">
                            <i className={styles.icon + ' fa fa-reddit'}></i>
                        </Link>
                    </Column>
                </ul>
                <p className={styles.copyrights}>
                    &copy; 2021 - <span className={styles.logo}>Listen It</span>
                </p>
            </Wrapper>
        </footer>
    );
};

export default Footer;