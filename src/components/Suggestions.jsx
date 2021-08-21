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
	z-index: 100;
	left: 0;
	right: 0;
	min-width: 100vw;
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
	e.preventDefault();
	const element = e.currentTarget;
	element.scrollLeft += e.deltaY;
}

function Suggestions({
	allCountries,
	inputValue,
	handleClickSuggestion,
	userCountries,
	setInputValue,
}) {
	const suggestionsDiv = useRef();
	const index = useRef(0);

	let listSuggestions;

	if (inputValue && allCountries) {
		const arrFiltered = filterCountries(allCountries, userCountries, inputValue);
		listSuggestions = arrFiltered.map((country) => {
			return <Suggestion key={country.name}>{country.name}</Suggestion>;
		});
	}

	function handleClick(e) {
		e.preventDefault();
		e.target !== e.currentTarget && handleClickSuggestion(e.target);
	}

	useEffect(() => {
		//this function handles the keyboard control of the Suggestion
		function handleKeyboard(e) {
			const maxIndex = suggestionsDiv.current?.children.length - 1;
			switch (e.keyCode) {
				case 40: //arrow-down
					e.preventDefault();
					suggestionsDiv.current.children[index.current]?.focus();
					break;
				case 9: // tab
				case 39: // arrow-right
					suggestionsDiv.current.children[
						index.current < maxIndex ? ++index.current : maxIndex
					]?.focus();
					break;
				case 37: // arrow-left
					suggestionsDiv.current.children[index.current > 0 ? --index.current : 0]?.focus();
					break;
				case 27: //esc
				case 38: // arrow-up
					e.preventDefault();
					suggestionsDiv.current.previousSibling?.focus();
					break;

				default:
					break;
			}
		}

		window.addEventListener('keydown', handleKeyboard);
		suggestionsDiv.current.addEventListener('wheel', handleScroll, { passive: false });

		return () => {
			window.removeEventListener('keydown', handleKeyboard);
			suggestionsDiv.current?.removeEventListener('wheel', handleScroll);
		};
	}, []);

	return (
		<Div ref={suggestionsDiv} onClick={handleClick}>
			{listSuggestions}
		</Div>
	);
}

export default Suggestions;
