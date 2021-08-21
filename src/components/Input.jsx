import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Suggestions from './Suggestions';

const StyledInput = styled.input`
	position: relative;
	appearance: none;
	outline: none;
	text-overflow: ellipsis;
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

function Input({ userCountries, setUserCountries }) {
	const [inputValue, setInputValue] = useState('');
	const [allCountries, setAllCountries] = useState(null);
	console.log('Input userCountries:', userCountries);

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
		<>
			<StyledInput
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Country I want to visit'
			/>
			{inputValue && (
				<Suggestions
					allCountries={allCountries}
					userCountries={userCountries}
					inputValue={inputValue}
					setInputValue={setInputValue}
					handleClickSuggestion={handleClickSuggestion}
				/>
			)}
		</>
	);
}

Input.propTypes = {
	userCountries: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			isVisited: PropTypes.bool.isRequired,
		})
	).isRequired,
	setUserCountries: PropTypes.func.isRequired,
};

export default Input;
