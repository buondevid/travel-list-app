import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Suggestions from './Suggestions';

const StyledInput = styled.input`
	position: relative;
	appearance: none;
	outline: none;
	text-overflow: ellipsis;
	color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondary : 'black')};
	border: 1px solid ${({ theme }) => theme.colors.text_secondary};
	border-radius: 4px;
	width: 100%;
	padding: 1.5rem;
	transition: all 0.3s;
	background-color: transparent;

	&:hover {
		border-color: transparent;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.secondary};
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.colors.secondary};
	}

	&::placeholder {
		font-style: italic;
		color: #a9a9a9;
	}
`;

function Input() {
	const [inputValue, setInputValue] = useState('');
	const [allCountries, setAllCountries] = useState(null);

	useEffect(() => {
		(async function getAllCountries() {
			let arrayOfCountries;
			const response = await fetch(`https://restcountries.eu/rest/v2/all?fields=name;`);
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

	function handleSubmit(e) {
		e.preventDefault();
		const suggestionDiv = e.target.nextElementSibling;
		if (inputValue?.trim() !== '' && suggestionDiv.firstChild) {
			setInputValue(suggestionDiv.firstChild?.textContent);
			suggestionDiv.firstChild?.focus();
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<StyledInput
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Country I want to visit'
					tabIndex={1}
				/>
			</form>
			{inputValue && (
				<Suggestions
					allCountries={allCountries}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
			)}
		</>
	);
}

export default Input;
