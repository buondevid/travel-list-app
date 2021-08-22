import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const appear = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
		}`;

const StyledHeader = styled.header`
	margin: 5% 0;
	text-align: center;
	animation: ${appear} 0.5s;
`;

const H1 = styled.h1`
	font-size: min(7rem, 12vmin);
	color: ${({ theme }) => theme.colors.secondary};
	text-shadow: -1px -1px rgb(255, 225, 213);
	transition: color 0.5s linear;
	animation: ${appear} 0.5s ease-in-out;
`;

const Button = styled.button`
	background: none;
	border: none;
	font-size: 4rem;
	margin: 1rem;
	transform: translateY(-35vh);
	transition: all 1s ease-in-out;
	cursor: pointer;
`;

const ButtonSun = styled(Button)`
	${({ theme }) => theme.name === 'dark' && 'transform: translateY(0)'}
`;

const ButtonMoon = styled(Button)`
	${({ theme }) => theme.name === 'light' && 'transform: translateY(0)'}
`;

function Header({ setTheme }) {
	return (
		<StyledHeader>
			<H1>
				<ButtonSun onClick={() => setTheme('light')}>🔆</ButtonSun>
				Travel-List
				<ButtonMoon onClick={() => setTheme('dark')}>🌙</ButtonMoon>
			</H1>
		</StyledHeader>
	);
}

Header.propTypes = {
	setTheme: PropTypes.func.isRequired,
};

export default Header;
