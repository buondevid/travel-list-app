import { useEffect, useState } from 'react';

/**
 * This custom hook runs a fetch on an external API on mount and store the data in the first
 * item returned in the array. The second returned item it's just an helper variable to keep track
 * of the _emptiness_ of the first value (null).
 * @param {String} key The name under which you want to store your data in Local Storage
 * @returns [allCountryArray, isEmpty]
 */
function useLocalStorageCountries(key) {
	const [countries, setCountries] = useState(() => {
		const localValue = window.localStorage.getItem(key);
		return localValue !== null ? JSON.parse(localValue) : null;
	});
	const isEmpty = !countries; // helper variable to track if there wasn't even a cached version

	useEffect(() => {
		(async function getAllCountries() {
			try {
				const response = await fetch(`https://restcountries.com/v3.1/all?fields=name;`, {cache: "no-store"});
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
