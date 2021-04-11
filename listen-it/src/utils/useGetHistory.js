import { useState, useEffect } from 'react';
import { dbStore } from './user';

const useGetHistory = (user) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if(user) { //logged user 
            const historyRef = dbStore
                .collection('users')
                .doc(user)
                .collection('history');
            historyRef.get()
                .then(snapshotLast => {
                    if(!snapshotLast.empty) {
                        setHistory(() => snapshotLast.docs?.map(x => x.data()));
                    }
                });
        }
    }, [ user ]);

    return [ history ];
};

export default useGetHistory;