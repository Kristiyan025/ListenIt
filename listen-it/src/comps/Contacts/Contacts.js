import styles from './Contacts.module.css';
import streetView from '../../images/contacts/street-view.jpg';
import Wrapper from '../Wrapper';

const Contacts = () => {
    const paddingInfo = '60px';
    const paddingMap = '20px';

    return (
        <section className={styles.contacts}>
            <h1 className={styles.title}>
                Contacts
            </h1>
            <Wrapper className='flexAround' paddingTop={paddingInfo} paddingBottom={paddingInfo}>
                <img className={styles.streetView} src={streetView} alt="Street View" />
                <section className={styles.data}>
                    <h1 className={styles.info}>
                        Telephone: 
                        <span>
                            <a href="tel:+359878362689">
                                +359 878 362 689
                            </a>
                        </span>
                    </h1>
                    <h1 className={styles.info}>
                        Email: 
                        <span>
                            <a href="mailto:agentavery@sample.com">
                                learn-it-bulgaria@gmail.com
                            </a>
                        </span>
                    </h1>
                    <h1 className={styles.info}>
                        Address: 
                        <span>
                            <address>
                                bulevard "Cherni vrah" 25, 1000 g.k. Lozenets, Sofia
                                </address>
                            </span>
                        </h1>
                </section>
            </Wrapper>
            <Wrapper className='flexCenter' paddingTop={paddingMap} paddingBottom={paddingMap}>
                <iframe title="Street View" className={styles.map} allowFullScreen="" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2312814814627!2d23.32179855844372!3d42.6776429378276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85072e3ef37d%3A0xfe74cdf7f75f1c07!2sbulevard%20%22Cherni%20vrah%22%2025%2C%201000%20g.k.%20Lozenets%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1615913591607!5m2!1sen!2sbg"></iframe>
            </Wrapper>
        </section>
    );
};

export default Contacts;