import { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { UserCountriesContext } from './ctx/UserCountriesContext';
import Item from './Item';

const Ul = styled.ul`
	position: relative;
	list-style-type: none;
`;

const SortIcon = styled.button`
	position: absolute;
	bottom: -0%;
	right: -8%;
	height: 1.5em;
	width: 1.5em;
	transform: translateX(50%);
	transform-origin: right;
	font-size: 3rem;
	border-radius: 50%;
	z-index: 10;
	border: none;
	background: ${({ theme }) => theme.colors.secondary};
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		transform: scale(1.2) translateX(50%);
	}

	&:hover:active {
		transform: scale(1) translateX(50%);
	}

	@media (max-width: 768px) {
		bottom: -8rem;
		right: 49%;
	}
`;

/**
 * Helper function that sorts this array of objects by 2 properties:
 * it separate _visited countries_ from unvisited ones, and then
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

function ListItems() {
	const { userCountries } = useContext(UserCountriesContext);
	const [isDefaultOrder, setIsDefaultOrder] = useState(true);

	function handleIconClick(e) {
		e.stopPropagation();
		setIsDefaultOrder((previousState) => !previousState);
	}

	const items = useMemo(
		() =>
			[...userCountries].sort(compare(isDefaultOrder)).map(({ name, isVisited }) => {
				return <Item key={name} country={name} isVisited={isVisited} />;
			}),
		[userCountries, isDefaultOrder]
	);

	const title = isDefaultOrder
		? 'Click to put visited places first'
		: 'Click to put unvisited places first';

	return (
		<Ul>
			<SortIcon title={title} onClick={handleIconClick}>
				{isDefaultOrder ? '📍' : '✈️'}
			</SortIcon>
			{items}
		</Ul>
	);
}

export default ListItems;
