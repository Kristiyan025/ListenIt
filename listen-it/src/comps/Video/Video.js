import styles from './Video.module.css';
import { useParams } from "react-router-dom";
import { useSearch, useVideo } from '../../youtube/search';
import useAddHistory from '../../utils/useAddHistory';
import Wrapper from '../Wrapper';
import RelatedLink from './RelatedLink';

const Video = (props) => {
    const padding = '50px';
    const count = 15;
    const { id } = useParams();
    const [ video/*, isLoading*/ ] = useVideo({}, id);
    const [ relatedVideos/*, isLoading*/ ] = useSearch({}, id, video?.snippet?.title, count);

    useAddHistory(id, props.user);

    let videos = relatedVideos?.items?.map(x => <RelatedLink key={x.id?.videoId} video={x} />);

    return (
        <Wrapper paddingTop={padding} paddingBottom={padding}>
            <h1 className={styles.pageTitle}>
                Video
            </h1>
            <section className={styles.section}>
                <section className={styles.current}>
                    <iframe className={styles.video} title={id} src={`https://www.youtube.com/embed/${id}`} loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
                    <h1 className={styles.title}>
                        {video?.snippet?.title}
                    </h1>
                    <section className={styles.data}>
                        <div className={styles.channel}>
                            <span className={styles.bold}>By:</span> {video?.snippet?.channelTitle}
                        </div>
                        <div className={styles.date}>
                            <span className={styles.bold}>Published at:</span> {video?.snippet?.publishedAt?.substr(0, video?.snippet?.publishedAt?.indexOf('T'))}
                        </div>                        
                    </section>
                    <p className={styles.describtion}>
                        <span className={styles.bold}>Describtion:</span> {video?.snippet?.description}
                    </p>  
                </section>
                <section className={styles.related}>
                    <h2 className={styles.relatedTitle}>
                        Related Videos
                    </h2>
                    <ul className={styles.list + ' scrollable'}>
                        {videos}
                    </ul>
                </section>
            </section>
        </Wrapper>
    );
}

export default Video;