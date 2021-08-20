import styled from 'styled-components';

const StyledHeader = styled.header`
	margin: 5% 0;
	text-align: center;
`;

const H1 = styled.h1`
	font-size: 7rem;
	color: #b3b3b3;
	color: rgba(141, 125, 119);
	text-shadow: -1px -1px rgb(255, 225, 213);
`;

function Header() {
	return (
		<StyledHeader>
			<H1>Travel-List</H1>
		</StyledHeader>
	);
}

export default Header;
