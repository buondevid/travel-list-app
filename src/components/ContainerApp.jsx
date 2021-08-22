import styled, { keyframes } from 'styled-components';

import ListItems from './ListItems';
import Input from './Input';
import UserContextProvider from './ctx/UserCountriesContext';

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
	padding: 0.6rem;
	margin: 5rem auto 10rem;
	border: 1px solid ${({ theme }) => theme.colors.tertiary};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.tertiary};
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
	transition: background-color 1s, border 1s;
	animation: ${appear} 0.5s ease-in-out;
`;

function ContainerApp() {
	return (
		<UserContextProvider>
			<Container>
				<Input />
				<ListItems />
			</Container>
		</UserContextProvider>
	);
}

export default ContainerApp;
