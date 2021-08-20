import { useState } from 'react';
import GlobalStyle from './components/styles/GlobalStyles';

import Header from './components/Header';
import ContainerApp from './components/ContainerApp';
import Theme from './components/styles/Theme';

function App() {
	const [theme, setTheme] = useState('light');

	return (
		<>
			<Theme chooseTheme={theme}>
				<GlobalStyle />
				<Header theme={theme }chooseTheme={setTheme} />

				<main>
					<ContainerApp />
				</main>
			</Theme>
		</>
	);
}

export default App;
