import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledHeader = styled.header`
	margin: 5% 0;
	text-align: center;
`;

const H1 = styled.h1`
	font-size: 7rem;
	color: ${({ theme }) => theme.colors.secondary};
	text-shadow: -1px -1px rgb(255, 225, 213);
	transition: color 0.5s linear;
`;

const Button = styled.button`
	background: none;
	border: none;
	font-size: 4rem;
	margin: 1rem;
	transform: translateY(-50vh);
	transition: all 1s;
`;

const ButtonSun = styled(Button)`
	${(props) => props.theme === 'dark' && 'transform: translateY(0)'}
`;

const ButtonMoon = styled(Button)`
	${(props) => props.theme === 'light' && 'transform: translateY(0)'}
`;

function Header({ chooseTheme }) {
	const themeCtx = useContext(ThemeContext);
	const theme = themeCtx.name;
	console.log(theme);
	return (
		<StyledHeader>
			<H1>
				<ButtonSun theme={theme} onClick={() => chooseTheme('light')}>
					🔆
				</ButtonSun>
				Travel-List
				<ButtonMoon theme={theme} onClick={() => chooseTheme('dark')}>
					🌙
				</ButtonMoon>
			</H1>
		</StyledHeader>
	);
}

export default Header;
