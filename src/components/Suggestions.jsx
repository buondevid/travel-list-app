import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import Suggestion from './Suggestion';

const appear = keyframes`
	from {
		transform: scaleX(0.1)
	}
	to {
		transform: scaleX(1) 
		}`;

const Div = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	min-width: 100vw;
	height: 6rem;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(2rem);
	z-index: 100;
	animation: ${appear} 0.2s linear;
	text-align: center;

	&::-webkit-scrollbar {
		display: none;
	}

	&:empty::after {
		content: 'No country found for your query...';
		position: relative;
		font-style: italic;
		line-height: 6rem;
	}
`;

/**
 * This functions filters an initial list of countries against the value
 * entered in the input and against the objects already existent in the
 * user todo list.
 * @param {object[]} initialList
 * @param {text} inputValue
 * @param {object[]} userList
 * @returns {object[]} An array of countries.
 */
function filterCountries(initialList, userList, inputValue) {
	const userListNames = userList.map(({ name }) => name.toLowerCase());

	let arrFiltered = initialList.filter((country) => {
		const countryName = country.name.toLowerCase();
		const inputText = inputValue.toLowerCase();

		return countryName.includes(inputText) && !userListNames.includes(countryName);
	});

	return arrFiltered;
}

//enable horizontal scrolling with mouse wheel
function handleScroll(e) {
	const element = e.currentTarget;
	element.scrollLeft += e.deltaY;
}

function Suggestions({ allCountries, inputValue, handleClickSuggestion, userCountries }) {
	const suggestionsDiv = useRef();
	let index = useRef(0);
	console.log(index);

	let arrFiltered;
	let listSuggestions;

	if (inputValue && allCountries) {
		arrFiltered = filterCountries(allCountries, userCountries, inputValue);
		listSuggestions = arrFiltered.map((country) => {
			return <Suggestion key={country.name}>{country.name}</Suggestion>;
		});
	}

	function handleClick(e) {
		e.preventDefault();
		e.target !== e.currentTarget && handleClickSuggestion(e.target);
	}

	useEffect(() => {
		function handleKeyboard(e) {
			const maxIndex = suggestionsDiv.current.children.length - 1;
			console.log(e);
			console.log(index.current);
			switch (e.keyCode) {
				case 40: //arrow-down
					suggestionsDiv.current.children[0].focus();
					break;
				case 39: // arrow-right
					e.preventDefault();
					suggestionsDiv.current.children[
						index.current < maxIndex ? ++index.current : maxIndex
					].focus();
					break;
				case 37: // arrow-left
					e.preventDefault();
					suggestionsDiv.current.children[index.current > 0 ? --index.current : 0].focus();
					break;
				case 38: // arrow-up
					e.preventDefault();
					suggestionsDiv.current.previousSibling.focus();
					break;

				default:
					break;
			}
		}
		window.addEventListener('keydown', handleKeyboard);
		return () => window.removeEventListener('keydown', handleKeyboard);
	}, []);

	return (
		<Div ref={suggestionsDiv} tabIndex={1} onClick={handleClick} onWheel={handleScroll}>
			{listSuggestions}
		</Div>
	);
}

export default Suggestions;
