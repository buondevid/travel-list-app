import styled from 'styled-components';

const Ul = styled.ul`
	list-style-type: none;
`;

function ListItems({ children }) {
	return <Ul>{children}</Ul>;
}

export default ListItems;
