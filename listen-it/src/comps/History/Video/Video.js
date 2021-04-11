import styles from './Video.module.css';
import { useVideo } from '../../../youtube/search';
import { Link } from 'react-router-dom';

const Video = (props) => {
    const [ video/*, isLoading*/ ] = useVideo({}, props.id);
    
    //console.log(video);
    const thumbnail = video?.snippet?.thumbnails?.medium?.url;
    const title = video?.snippet?.title;
    const channel = video?.snippet?.channelTitle;
    const date = video?.snippet?.publishTime?.substr(0, props.video.snippet.publishTime.indexOf('T'));

    const onErrorHandler = (e) => {
        e.target.src = 'video?.snippet?.thumbnails?.default?.url';
    };

    return (
        <li className={styles.video}>
            <Link className={styles.link} to={`/video/${props.id}`}>
                <img className={styles.thumbnail} src={thumbnail} alt="Video Thumbnail" onError={onErrorHandler} />
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
                        Published on: {date}
                    </h4>       
                    <h4>
                        Last watched: {props.dateTime}
                    </h4>           
                </div>
            </Link>
        </li>
    );
};

export default Video;