import styles from './Video.module.css';
import { Link } from 'react-router-dom';

const Video = (props) => {
    //const video = <iframe src={`https://www.youtube.com/embed/${props.video?.id?.videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>

    const space = 100.0 / props.len;
    const margin = '5px';
    
    return (
        <li className={styles.video} style={{
            width: (window.innerWidth <= 1080 ? '200px' : 'calc(' + space + '% - 2 * ' + margin + ')'),
            margin: '0 ' + margin,
            }}>
            <Link className={styles.link} to={`/video/${props.video?.id?.videoId}`}>
                <img className={styles.thumbnail} src={props.video?.snippet?.thumbnails?.medium?.url} alt="Video Thumbnail"/>
                <div className={styles.tittleContainer}>
                    <h2 className={styles.tittle}>
                        {props.video?.snippet?.title}
                    </h2>                    
                </div>
                <h3 className={styles.channel}>
                    By: {props.video?.snippet?.channelTitle}
                </h3>
                <h4 className={styles.date}>
                    {props.video?.snippet?.publishTime?.substr(0, props.video.snippet.publishTime.indexOf('T'))}
                </h4>
            </Link>
        </li>
    );
};

export default Video;