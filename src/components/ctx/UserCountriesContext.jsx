import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const UserCountriesContext = createContext();

const initialState = [
	{ name: 'Italy', isVisited: true },
	{ name: 'Norway', isVisited: true },
	{ name: 'Brazil', isVisited: false },
	{ name: 'Sweden', isVisited: false },
];

export const UserContextProvider = (props) => {
	const [userCountries, setUserCountries] = useState(initialState);

	// check if Local Storage exists and fetch it
	useEffect(() => {
		const localValue = window.localStorage.getItem('userCountries');
		localValue && setUserCountries(JSON.parse(localValue));
	}, []);

	// update Local Storage at every State change
	useEffect(() => {
		window.localStorage.setItem('userCountries', JSON.stringify(userCountries));
	}, [userCountries]);

	const userCountriesContext = {
		userCountries,
		setUserCountries,
	};

	return (
		<UserCountriesContext.Provider value={userCountriesContext}>
			{props.children}
		</UserCountriesContext.Provider>
	);
};

export default UserContextProvider;
