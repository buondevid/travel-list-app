import { useEffect, useState } from 'react';

function useLocalStorageCountries(key) {
	const [countries, setCountries] = useState(() => {
		const localValue = window.localStorage.getItem(key);
		return localValue !== null ? JSON.parse(localValue) : null;
	});
	const isEmpty = !countries; // helper variable to track if there wasn't even a cached version

	useEffect(() => {
		(async function getAllCountries() {
			try {
				const response = await fetch(`https://restcountries.eu/rest/v2/all?fields=name;`);
				if (!response.ok) throw Error();
				const arrayOfCountries = await response.json();
				setCountries(arrayOfCountries);
				window.localStorage.setItem(key, JSON.stringify(arrayOfCountries));
			} catch (err) {
				alert(
					`${err.message}: we will try to give you a cached list of all countries for this session.`
				);
			}
		})();
	}, [key]);

	return [countries, isEmpty];
}

export default useLocalStorageCountries;
