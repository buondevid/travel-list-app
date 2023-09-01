import { useContext, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { UserCountriesContext } from './ctx/UserCountriesContext';
import Suggestion from './Suggestion';

const appear = keyframes`
	from {
		transform: scaleX(0.1);
	}
	to {
		transform: scaleX(1) translateY(10%);
		}`;

const Div = styled.div`
	position: absolute;
	z-index: 100;
	left: 0;
	right: 0;
	min-width: 100%;
	transform: translateY(10%);
	text-align: center;
	height: 6rem;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(2rem);
	animation: ${appear} 0.2s linear;

	&::-webkit-scrollbar {
		display: none;
	}

	&:empty::after {
		content: 'No further countries found for your query...';
		position: relative;
		font-style: italic;
		line-height: 6rem;
	}
`;

/**
 * This function-algorithm filters an `initialList` of countries against the `inputValue`
 * entered and against the values already existent in `userList`. It makes use of RegExp
 * so that it can match also words starting with desired value in the middle of the string.
 * @returns {Array} An array of countries.
 */
function filterCountries(initialList, userList, inputValue) {
	const userListNames = userList.map(({ name }) => name.toLowerCase());

	function escapeRegex(string) {
		return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	const arrFiltered = initialList.filter((country) => {
		const countryName = country.name.common.toLowerCase();
		const inputText = inputValue.toLowerCase();
		const inputEscaped = escapeRegex(inputText); // escape string for Reg Exp
		const regex = new RegExp(`(\\s|^)${inputEscaped}`, 'g'); // match all words in a string that start with the query
		return regex.test(countryName) && !userListNames.includes(countryName);
	});

	return arrFiltered;
}

// hack to enable horizontal scrolling with mouse wheel
function handleHorizontalScroll(e) {
	e.preventDefault();
	const element = e.currentTarget;
	element.scrollLeft += e.deltaY;
}

function Suggestions({ allCountries, inputValue, setInputValue }) {
	const { userCountries, setUserCountries } = useContext(UserCountriesContext);
	/* state for debouncing, the initialState is useful to not let the CSS selector :empty kick in on mount*/
	const [listSuggestions, setListSuggestions] = useState(' ');
	const suggestionsDiv = useRef();
	const index = useRef(0);

	function handleClickSuggestion(e) {
		if (e.target === e.currentTarget) return;
		setInputValue('');
		setUserCountries((previousState) => [
			...previousState,
			{ name: e.target.textContent, isVisited: false },
		]);
	}

	// this Effect debounces the filtering
	useEffect(() => {
		let debounceTimer = setTimeout(() => {
			const arrFiltered = filterCountries(allCountries, userCountries, inputValue).map(
				(country) => {
					return <Suggestion key={country.name.common}>{country.name.common}</Suggestion>;
				}
			);
			setListSuggestions(arrFiltered);
		}, 300);

		return () => clearTimeout(debounceTimer);
	}, [inputValue, allCountries, userCountries]);

	//this Effect handles the keyboard control over Suggestions
	useEffect(() => {
		const element = suggestionsDiv.current;

		function handleKeydown(e) {
			const maxIndex = element?.children.length - 1;
			switch (e.keyCode) {
				case 40: //arrow-down
					e.preventDefault();
					index.current = 0;
					element.firstElementChild?.focus();
					break;
				case 9: // tab
				case 39: // arrow-right
					if (element.contains(document.activeElement))
						element.children[index.current < maxIndex ? ++index.current : maxIndex]?.focus();

					break;
				case 37: // arrow-left
					if (element.contains(document.activeElement))
						element.children[index.current > 0 ? --index.current : 0]?.focus();
					break;
				case 27: //esc
				case 38: // arrow-up
				case 8: // backspace
					if (element.contains(document.activeElement)) {
						e.preventDefault();
						element.previousElementSibling?.firstChild.focus();
					}
					break;

				default:
					// if letter pressed, focus back input
					if (/^[a-z]$/.test(e.key) && element.contains(document.activeElement)) {
						element.previousElementSibling?.firstChild.focus();
					}
					break;
			}
		}

		document.addEventListener('keydown', handleKeydown);
		element.addEventListener('wheel', handleHorizontalScroll, { passive: false });

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			element.removeEventListener('wheel', handleHorizontalScroll);
		};
	}, []);

	return (
		<Div ref={suggestionsDiv} onClick={handleClickSuggestion}>
			{listSuggestions}
		</Div>
	);
}

Suggestions.propTypes = {
	allCountries: PropTypes.array.isRequired,
	inputValue: PropTypes.string.isRequired,
	setInputValue: PropTypes.func.isRequired,
};

export default Suggestions;
