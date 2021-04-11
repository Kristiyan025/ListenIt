import { useState, useEffect } from 'react';

const request = async (url, options) => {
    try {
        let response = await fetch(url, options);

        let data = await response.json();

        return data;        
    }
    catch(err) {
        //console.log(err);
    }

    return undefined;
}

const apiKey = 'AIzaSyC3KP4tGAdqv9mOWsm9T-WS80v7-s0RUOI';

const searchUrl = (kewords, type, maxResults, videoId) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${kewords.replaceAll(' ', '%20')}${videoId !== '' ? `&relatedToVideoId=${videoId}` : ''}&type=${type}&videoDimension=2d&key=${apiKey}\n&Authorization=Bearer ${apiKey}&Accept=application/json`;

const getVideo = (videoId) => `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}\n&Authorization=Bearer ${apiKey}&Accept=application/json`;

const options = {
    'method': 'GET',
    'headers': {
        'Authorization': 'Basic Og==',
        'content-type': 'application/json',
        'Cache-Control': 'public',
    }
};

const useSearch = (initial, videoId, kewords = 'music', maxResults = 25, type = 'video') => {
    const [state, setState ] = useState(initial);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        request(searchUrl(kewords, type, maxResults, videoId), options)
            .then(res => {
                setState(res);
                setIsLoading(false);
            })
            .catch(err => {
                //console.log(err);
            })
    }, [ videoId, kewords, maxResults, type ]);

    return [
        state,
        isLoading,
    ]
};

const useVideo = (initial, videoId) => {
    const [state, setState ] = useState(initial);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        request(getVideo(videoId), options)
            .then(res => {
                setState(res?.items?.[0]);
                setIsLoading(false);
            })
            .catch(err => {
                //console.log(err);
            })
    }, [ videoId ]);

    return [
        state,
        isLoading,
    ]
};

export default useSearch;

export {
    useSearch,
    useVideo,
}