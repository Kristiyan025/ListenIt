import { useState, useEffect } from 'react';
import { auth } from './user';

const useAuthentication = () => {
	const [ user, setUser ] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(() => authUser.email);
			} else {
				setUser(() => '');
			}
		});
	}, [user]);

    return [ user ];
};

export default useAuthentication;