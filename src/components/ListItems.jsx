import { useState } from 'react';
import styled from 'styled-components';

import Item from './Item';

const Ul = styled.ul`
	position: relative;
	list-style-type: none;
`;

const Icon = styled.button`
	position: absolute;
	bottom: -0%;
	right: -8%;
	transform: translateX(50%);
	transform-origin: right;
	font-size: 3rem;
	height: 1.5em;
	width: 1.5em;
	border-radius: 50%;
	z-index: 10;
	border: none;
	background: ${({ theme }) => theme.colors.secondary};
	transition: all 0.3s;

	&:hover {
		transform: scale(1.2) translateX(50%);
	}

	&:hover:active {
		transform: scale(1) translateX(50%);
	}
`;

/**
 * This function sorts an array of objects by 2 properties:
 * it divides _visited countries_ from unvisited ones, and then
 * orders them alphabetically.
 * @param {boolean} putFirstVisitedCountries If true, the function
 * puts first visited countries; otherwise it puts first unvisited ones.
 */
function compare(putBeforeVisitedCountries) {
	return function compareCountries(a, b) {
		const { name: countryA, isVisited: isVisitedA } = a;
		const { name: countryB, isVisited: isVisitedB } = b;

		let comparison = 0;

		if (isVisitedA - isVisitedB !== 0) {
			comparison = isVisitedB - isVisitedA;
			return putBeforeVisitedCountries ? comparison * -1 : comparison;
		}

		if (countryA > countryB) {
			comparison = 1;
		} else if (countryA < countryB) {
			comparison = -1;
		}
		return comparison;
	};
}

function ListItems({ userCountries, handleCheckboxChange, handleDeleteItem }) {
	const [isDefaultOrder, setIsDefaultOrder] = useState(true);

	const items = [...userCountries].sort(compare(isDefaultOrder)).map(({ name, isVisited }) => {
		return (
			<Item
				key={name}
				handleDeleteItem={handleDeleteItem}
				country={name}
				isVisited={isVisited}
				handleCheckboxChange={handleCheckboxChange}
			/>
		);
	});

	const title = isDefaultOrder
		? 'Click to put visited places first'
		: 'Click to put unvisited places first';

	function handleIconClick(e) {
		e.stopPropagation();
		setIsDefaultOrder((previousState) => !previousState);
	}

	return (
		<Ul>
			<Icon title={title} onClick={handleIconClick}>
				{isDefaultOrder ? '📍' : '✈️'}
			</Icon>
			{items}
		</Ul>
	);
}

export default ListItems;
