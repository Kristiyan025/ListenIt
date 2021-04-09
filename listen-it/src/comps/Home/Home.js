import styles from './Home.module.css';
import VideoGallery from '../VideoGallery';
import { Fragment, Suspense } from 'react';
import Intro from '../Intro/Intro';

const Home = ({ user }) => {
    const galleries = [/*
        `${new Date().getFullYear()} Top Hits`,
        'Rap Music Videos',
        'Dance Music Videos',
        'The All Time Music Hits',
        'Popular Official Music Videos',//*/
    ];

    return (
        <Fragment>
            <Intro user={user} />
            <h1 className={styles.collectionTittle}>
                Music Collections
            </h1>
            <Suspense fallback={<div>Loading...</div>}>
                {galleries.map((x, index) => <VideoGallery key={index} title={x} />)}
            </Suspense>            
        </Fragment>
    );
};

export default Home;