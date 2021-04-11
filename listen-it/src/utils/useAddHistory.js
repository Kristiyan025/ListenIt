import { useEffect } from 'react';
import { dbStore } from './user';

const addZeros = (num, pad = 2) => String(num).padStart(2, '0');
const format = (dateTime) => `${addZeros(dateTime.getDate())}/${addZeros(dateTime.getMonth() + 1)}/${addZeros(dateTime.getFullYear(), 4)} ` +
    `${addZeros(dateTime.getHours())}:${addZeros(dateTime.getMinutes())}:${addZeros(dateTime.getSeconds())}`;

const useAddHistory = (id, user) => {

    useEffect(() => {
        if(user) { //logged user 
            const historyRef = dbStore
                .collection('users')
                .doc(user)
                .collection('history');
            historyRef.orderBy('watchingTime', 'desc').limit(1).get()
                .then(snapshotLast => {
                    if(snapshotLast.empty || snapshotLast?.docs?.[0]?.data()?.videoId !== id) {
                        historyRef.add({
                            videoId: id,
                            watchingTime: format(new Date()),
                        }).then(videoRef => {
                            //console.log(videoRef, 'yes');
                        });
                    }   
                });
        }
    }, [ id, user ]);
};

export default useAddHistory;