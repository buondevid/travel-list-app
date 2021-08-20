import GlobalStyle from './components/styles/GlobalStyles';

import Header from './components/Header';
import ContainerApp from './components/ContainerApp';

function App() {
	return (
		<>
			<GlobalStyle />

			<Header />

			<main>
				<ContainerApp />
			</main>
		</>
	);
}

export default App;
