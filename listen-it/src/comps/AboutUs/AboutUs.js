import styles from './AboutUs.module.css';
import Wrapper from '../Wrapper'; 

const AboutUs = () => {

    return (
        <section className={styles.section}>
            <Wrapper className="flexBetween" 
                flexDirection="column" 
                padding="60px"
                background="rgba(12, 12, 12, 0.5)"
                borderRadius="30% / 25%">
                <h1 className={styles.title}>
                    A little more about our amazing online community!
                </h1>
                <section className={styles.container}>
                    <section className={styles.text}>
                        At this web platform you can not only listen toyour favorite song, but you can create your own artistic playlists, conntect with your friends and share the joy! Also you can have all of your questions answered by our support team and other qurious members of our community. 
                    </section>
                    <section className={styles.graphics}>
                        <i className={`${styles.icon} fa fa-podcast`}></i>
                        <i className={`${styles.icon} fa fa-headphones`}></i>
                        <i className={`${styles.icon} fa fa-volume-up`}></i>
                        <i className={`${styles.icon} fa fa-spotify`}></i>
                        <i className={`${styles.icon} fa fa-play-circle`}></i>
                        <i className={`${styles.icon} fa fa-music`}></i>
                        <i className={`${styles.icon} fa fa-music`}></i>
                        <i className={`${styles.icon} fa fa-play-circle`}></i>
                        <i className={`${styles.icon} fa fa-music`}></i>
                    </section>                
                </section>
            </Wrapper>
        </section>
    );
};

export default AboutUs;