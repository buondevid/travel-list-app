import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import useLocalStorage from './custom hooks/useLocalStorage';
import ListItems from './ListItems';
import Input from './Input';
import Suggestions from './Suggestions';

const appear = keyframes`
	from {
		transform: translateY(5rem);
		opacity: 0;
	}
	to {
		transform: translateY(0) 
		opacity: 1;
		}`;

const Container = styled.div`
	width: min(80vmin, 60rem);
	margin: 5rem auto;
	padding: 0.6rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
	animation: ${appear} 0.5s ease-in-out;
`;

const initialState = [
	{ name: 'Italy', isVisited: true },
	{ name: 'Norway', isVisited: true },
	{ name: 'Brazil', isVisited: false },
	{ name: 'Sweden', isVisited: false },
];

function ContainerApp() {
	const [inputValue, setInputValue] = useState('');
	const [allCountries, setAllCountries] = useState(null);
	const [userCountries, setUserCountries] = useLocalStorage(initialState, 'userCountries');

	function handleInputChange(value) {
		setInputValue(value);
	}

	function handleDeleteItem(countryName) {
		const index = userCountries.findIndex((country) => {
			return country.name === countryName;
		});

		let tempArr = [...userCountries];
		tempArr.splice(index, 1);

		setUserCountries(tempArr);
	}

	function handleCheckboxChange(e) {
		const target = e.currentTarget;
		const index = userCountries.findIndex((country) => {
			return country.name === target.id;
		});
		let tempArr = [...userCountries];
		tempArr[index].isVisited = target.checked;
		setUserCountries(tempArr);
	}

	function handleClickSuggestion(clickedTag) {
		setInputValue('');
		setUserCountries((previousState) => [
			...previousState,
			{ name: clickedTag.textContent, isVisited: false },
		]);
	}

	useEffect(() => {
		(async function getAllCountries() {
			let arrayOfCountries;
			const response = await fetch(`https://restcountries.eu/rest/v2/all`);
			if (response.ok) {
				arrayOfCountries = await response.json();
			} else {
				alert(
					`${response.status}: There was a problem while fetching external data, try refreshing the page or come back later`
				);
			}

			setAllCountries(arrayOfCountries);
		})();
	}, []);

	return (
		<Container>
			<Input handleInputChange={handleInputChange} inputValue={inputValue} />

			{inputValue && (
				<Suggestions
					handleClickSuggestion={handleClickSuggestion}
					allCountries={allCountries}
					inputValue={inputValue}
					userCountries={userCountries}
				/>
			)}

			<ListItems
				handleDeleteItem={handleDeleteItem}
				handleCheckboxChange={handleCheckboxChange}
				userCountries={userCountries}
			/>
		</Container>
	);
}

export default ContainerApp;
