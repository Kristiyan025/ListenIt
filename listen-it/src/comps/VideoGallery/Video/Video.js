import styles from './Video.module.css';
import { Link } from 'react-router-dom';

const Video = (props) => {
    const space = 100.0 / props.len;
    const margin = '5px';

    const id = props.video?.id?.videoId;
    const thumbnail = props.video?.snippet?.thumbnails?.medium?.url;
    const title = props.video?.snippet?.title;
    const channel = props.video?.snippet?.channelTitle;
    const date = props.video?.snippet?.publishTime?.substr(0, props.video.snippet.publishTime.indexOf('T'));

    const onErrorHandler = (e) => {
        e.target.src = 'props.video?.snippet?.thumbnails?.default?.url';
    };
    
    return (
        <li className={styles.video} style={{
            width: (window.innerWidth <= 1080 ? '200px' : 'calc(' + space + '% - 2 * ' + margin + ')'),
            margin: '0 ' + margin,
            }}>
            <Link className={styles.link} to={`/video/${id}`}>
                <img className={styles.thumbnail} src={thumbnail} alt="Video Thumbnail" onError={onErrorHandler} />
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
            </Link>
        </li>
    );
};

export default Video;