import styled from 'styled-components';

import ListItems from './ListItems';
import Item from './Item';
import Input from './Input';

const Container = styled.div`
	width: min(80vmin, 50rem);
	margin: auto;
	padding: 0.6rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: rgba(255,255,255, 0.8);
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
`;

function ContainerApp() {
	return (
		<Container>
			<Input />

			<ListItems>
				<Item>ciccio1</Item>
				<Item>ciccio2</Item>
				<Item>ciccio3</Item>
			</ListItems>
		</Container>
	);
}

export default ContainerApp;
