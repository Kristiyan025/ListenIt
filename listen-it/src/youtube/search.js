import { useState, useEffect } from 'react';

const request = async (url, options) => {
    let response = await fetch(url, options);

    let data = await response.json();

    return data;
}

const apiKey = 'AIzaSyCWAQkla6nyj6b4bMIH8vIutRIE9jSEgn8';

const searchUrl = (kewords = 'music', type = 'video', maxResults = 25) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${kewords.replaceAll(' ', '%20')}&type=${type}&videoDimension=2d&key=${apiKey}\n&Authorization=Bearer ${apiKey}&Accept=application/json`;

const options = {
    'method': 'GET',
    'headers': {
        'Authorization': 'Basic Og==',
        'content-type': 'application/json'
    }
};

const useSearch = (initial, kewords = 'music', type = 'video', maxResults = 25) => {
    const [state, setState ] = useState(initial);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        request(searchUrl(kewords, type, maxResults), options)
            .then(res => {
                setState(res);
                setIsLoading(false);
            })
    }, [ kewords, type, maxResults ]);

    return [
        state,
        isLoading,
    ]
};

export {
    useSearch
};