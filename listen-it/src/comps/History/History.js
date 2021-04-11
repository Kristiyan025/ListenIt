import styles from './History.module.css';
import useGetHistory from '../../utils/useGetHistory';
import { Redirect } from 'react-router-dom';
import Wrapper from '../Wrapper';
import Video from './Video';

const History = (props) => {
    const [ videoHistory ] = useGetHistory(props.user);

    if(!props.user) {
        return (
            <Redirect to='/' />
        );
    }

    const padding = '80px';

    let collection = videoHistory.length > 0 ? videoHistory?.map(x => <Video key={x.videoId} id={x.videoId} dateTime={x.watchingTime} />) : [];

    return (
        <section className={styles.section}>
            <Wrapper className="flexCenter" flexDirection="column" paddingTop={padding} paddingBottom={padding}>
                <h1 className={styles.title}>
                    History
                </h1>
                <ul className={styles.list}>
                    {videoHistory.length === 0 ? (
                        <li className={styles.empty}>
                            You haven't watched any videos yet!
                        </li>
                    ) : (collection)}
                </ul>
            </Wrapper>
        </section>
    );
};

export default History;