import styled from 'styled-components';

const StyledHeader = styled.header`
	margin: 10% 0;
	text-align: center;
`;

const H1 = styled.h1`
	font-size: 7rem;
	color: #b3b3b3;
	color: rgba(255, 255, 255, 0.3);
	text-shadow: -1px -1px rgba(0, 0, 0, 0.25);
`;

function Header() {
	return (
		<StyledHeader>
			<H1>Travel-List</H1>
		</StyledHeader>
	);
}

export default Header;
