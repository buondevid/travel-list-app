import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import ContainerApp from './components/ContainerApp';
import UserContextProvider from './components/ctx/UserCountriesContext';
import Header from './components/Header';
import Pie from './components/ProgressCircle';
import GlobalStyle from './components/styles/GlobalStyles';
import Theme from './components/styles/Theme';

const appear = keyframes`
	from {
		opacity: 0;;
	}
	to {
		opacity: 0.5;
	}
`;

const CircleWrapper = styled.div`
	margin-top: -5%;
	margin-bottom: 5rem;
	text-align: center;
	opacity: 0.5;
	animation: ${appear} 0.5s ease-in;
	transition: opacity 0.3s;
	${({ theme }) =>
		theme.name === 'dark'
			? 'filter: drop-shadow(0px 0px 3px #efd0ca)'
			: 'filter: drop-shadow(0px 0px 3px #8d7d77)'};

	&:hover {
		opacity: 1;
	}
`;

function App() {
	const [theme, setTheme] = useState(() => {
		const localTheme = window.localStorage.getItem('theme');
		return localTheme ? localTheme : 'light';
	});

	useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<>
			<Theme theme={theme}>
				<UserContextProvider>
					<GlobalStyle />

					<Header setTheme={setTheme} />

					<main>
						<ContainerApp />
					</main>

					<footer>
						<CircleWrapper>
							<Pie />
						</CircleWrapper>
					</footer>
				</UserContextProvider>
			</Theme>
		</>
	);
}

export default App;
