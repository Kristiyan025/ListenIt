import styles from './RelatedLink.module.css';
import { Link } from 'react-router-dom';

const RelatedLink = (props) => {
    const margin = '5px';

    const id = props.video?.id?.videoId;
    const thumbnail = props.video?.snippet?.thumbnails?.medium?.url;
    const title = props.video?.snippet?.title;
    const channel = props.video?.snippet?.channelTitle;
    const date = props.video?.snippet?.publishTime?.substr(0, props.video.snippet.publishTime.indexOf('T'));
    
    return (
        <li className={styles.video} style={{
            margin: '0 ' + margin,
            }}>
            <Link className={styles.link} to={`/video/${id}`}>
                <img className={styles.thumbnail} src={thumbnail} alt="Video Thumbnail"/>
                <div className={styles.container}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>
                            {title}
                        </h2>                          
                    </div>
                    <h3 className={styles.channel}>
                        By: {channel}
                    </h3>
                    <h4 className={styles.date}>
                        {date}
                    </h4>                  
                </div>
            </Link>
        </li>
    );
};

export default RelatedLink;