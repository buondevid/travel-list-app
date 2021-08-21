import styled, { keyframes } from 'styled-components';

import useLocalStorage from './custom hooks/useLocalStorage';
import ListItems from './ListItems';
import Input from './Input';

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
	margin: 5rem auto 10rem;
	padding: 0.6rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.tertiary};
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
	animation: ${appear} 0.5s ease-in-out;
	transition: background-color 1s linear;
`;

const initialState = [
	{ name: 'Italy', isVisited: true },
	{ name: 'Norway', isVisited: true },
	{ name: 'Brazil', isVisited: false },
	{ name: 'Sweden', isVisited: false },
];

function ContainerApp() {
	const [userCountries, setUserCountries] = useLocalStorage(initialState, 'userCountries');

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

	return (
		<Container>
			<Input userCountries={userCountries} setUserCountries={setUserCountries} />

			<ListItems
				handleDeleteItem={handleDeleteItem}
				handleCheckboxChange={handleCheckboxChange}
				userCountries={userCountries}
			/>
		</Container>
	);
}

export default ContainerApp;
