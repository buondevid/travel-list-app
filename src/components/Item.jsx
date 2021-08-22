import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { UserCountriesContext } from './ctx/UserCountriesContext';

const rocket = keyframes`
	0% {
		transform: translateX(100rem);
	},
	90% {
		transform: translateX(0);
	},
	100% {
		transform: rotate(0) translateX(0);
	}
`;

const Li = styled.li`
	position: relative;
	border-bottom: 1px dotted #8d7d77;
	padding: 1.5rem 0;
	vertical-align: middle;

	&:last-child {
		border: none;
	}
`;

const Div = styled.div`
	padding: 0 1rem;
	vertical-align: middle;
	/* ${({ done }) => done && 'left: 50%;'}; */
	transition: all 0.3s;
`;

const Input = styled.input`
	height: 2rem;
	width: 2rem;
	margin-right: 1.5rem;
	vertical-align: middle;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.2);
	}

	&:checked {
		display: none;
	}
`;

const Label = styled.label`
	position: relative;
	transition: all 0.5s;
	color: ${({ theme }) => theme.colors.text_primary};

	${Input}:checked ~ & {
		font-style: italic;
		font-size: 1.5rem;
		/* margin-left: 3rem; */
		opacity: 0.5;

		&::after {
			content: '';
			width: 100%;
			border-bottom: solid 1px ${({theme})=> theme.colors.text_primary};
			position: absolute;
			left: 0;
			top: 50%;
			transform: rotate(-45deg)
		}
	}
`;

const DeleteButton = styled.button`
	visibility: hidden;
	opacity: 0;
	position: absolute;
	color: ${({ theme }) => theme.colors.secondary};
	padding: 0.5rem;
	cursor: pointer;
	right: 2rem;
	top: 0;
	bottom: 0;
	font-size: 3rem;
	outline: none;
	border: none;
	background: transparent;
	transition: all 0.2s;
	transform: translateX(-1rem);

	&:hover {
		transform: scale(1.2);
	}

	${Li}:hover & {
		visibility: visible;
		opacity: 1;
		transform: translateX(0);
	}

	${Li}:hover &:hover {
		transform: scale(1.3);
	}
`;

function Item({ country, isVisited }) {
	const { userCountries, setUserCountries } = useContext(UserCountriesContext);

	function handleDeleteItem(e) {
		const index = userCountries.findIndex((country) => {
			return country.name === e.target.previousSibling.htmlFor;
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

	return (
		<Li>
			<Div done={isVisited}>
				<Input id={country} type='checkbox' checked={isVisited} onChange={handleCheckboxChange} />
				<Label htmlFor={country}>{country}</Label>
				<DeleteButton onClick={handleDeleteItem}>ｘ</DeleteButton>
			</Div>
		</Li>
	);
}

Item.propTypes = {
	country: PropTypes.string.isRequired,
	isVisited: PropTypes.bool.isRequired,
};

export default Item;
