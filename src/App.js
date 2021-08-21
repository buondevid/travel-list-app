import { useState, useEffect } from 'react';

import ContainerApp from './components/ContainerApp';
import Header from './components/Header';
import GlobalStyle from './components/styles/GlobalStyles';
import Theme from './components/styles/Theme';

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
				<GlobalStyle />
				<Header setTheme={setTheme} />
				<main>
					<ContainerApp />
				</main>
			</Theme>
		</>
	);
}

export default App;
