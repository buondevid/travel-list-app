import { useEffect, useState } from 'react';

function useLocalStorage(initialValue, key) {
	const [value, setValue] = useState(() => {
		const localValue = window.localStorage.getItem(key);
		return localValue !== null ? JSON.parse(localValue) : initialValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}

export default useLocalStorage;
