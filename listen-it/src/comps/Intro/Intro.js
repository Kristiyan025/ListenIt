import styles from './Intro.module.css';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const Intro = ({ user }) => {
    const padding = '100px';

    const isLoggedIn = user !== '';

    return (
        <section className={styles.intro}> 
            <Wrapper className="flexCenter"
                flexDirection="column" 
                paddingTop={padding} 
                paddingBottom={padding}>
                <h1 className={styles.tittle}>
                    Listen It - One of the biggest online music community!
                </h1>
                <section className={styles.content}>
                    <article className={styles.text}>
                        Welcome to one of the best Web Applications for listening music. 
                        It's just amazing - its simple, stunning, but simultaneously it 
                        can do so much for you. Don't waste any more time and try it!
                    </article>
                    <section className={styles.aside}>
                        <Icon size="250px" />
                        { isLoggedIn ? (  
                            <Link to='/about-us' className={styles.link}>
                                About Us
                            </Link> 
                        ) : (
                            <Link to='/sign-up' className={styles.link}>
                                Sign Up
                            </Link>  
                        )}
                    </section>
                </section>
            </Wrapper>
        </section>
    );
};

export default Intro;