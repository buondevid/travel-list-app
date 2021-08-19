import GlobalStyle from './components/styles/GlobalStyles';
import styled from 'styled-components';

import Header from './components/Header';
import ContainerApp from './components/ContainerApp';

const Container = styled.main``;

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
