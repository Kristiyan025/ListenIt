import styles from './VideoGallery.module.css';
import Wrapper from '../Wrapper';
import Video from './Video';
import { useState } from 'react';
import { useSearch } from '../../youtube/search';

const VideoGallery = (props) => {
    const padding = '20px';
    const len = 5;
    const [ index, setIndex ] = useState(0);
    const [ request/*, isLoading*/ ] = useSearch({}, props.tittle);

    const leftButtonClickHandler = () => {
        if(index > 0) setIndex(old => old - 1);
    };

    const rightButtonClickHandler = () => {
        if(index < request?.pageInfo?.resultsPerPage - len) setIndex(old => old + 1);
    };

    const changeVideosHandler = () => {
        if(index > 0) document.querySelector(`.${styles.leftBtn}`).disabled = false;
        else document.querySelector(`.${styles.leftBtn}`).disabled = true;

        if(index < request?.pageInfo?.resultsPerPage - len) document.querySelector(`.${styles.rightBtn}`).disabled = false;
        else document.querySelector(`.${styles.rightBtn}`).disabled = true;
    };

    let videos = request?.items?.map(x => <Video key={x.id?.videoId} video={x} len={len}/>);

    return (
        <Wrapper className="flexCenter" paddingTop={padding} paddingBottom={padding}>
            <section className={styles.gallery}>
                    <h2 className={styles.tittle}>
                        {props.tittle}
                    </h2>
                    <section className={styles.content}>
                        <button className={styles.leftBtn} onClick={leftButtonClickHandler}>&#9001;</button>
                        <ul className={styles.videos} onChange={changeVideosHandler}>
                            {videos?.slice(index, index + len)}
                        </ul>
                        <button className={styles.rightBtn} onClick={rightButtonClickHandler}>&#9002;</button>                       
                    </section>
                    <hr className={styles.hr} />
            </section>
        </Wrapper>
    );
};

export default VideoGallery;