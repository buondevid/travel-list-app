import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
		color: inherit; 
		letter-spacing: inherit;
		outline: none;
	}

	html {
		font-size: 62.5%;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	body {
		display: flex;
		flex-direction: column;
		padding-top: 5rem;
		background-color: ${({ theme }) => theme.colors.primary};
		align-items: center;
		font-size: 2rem;
		height: 100vh;
		width: 100%;
		transition: background-color 1s linear;
		-webkit-font-smoothing: antialiased;
 		-moz-font-smoothing: antialiased;
 		-ms-font-smoothing: antialiased;
 		-o-font-smoothing: antialiased;
	}

	.textSVG {
		fill: ${({ theme }) => theme.colors.secondary};
	}

`;

export default GlobalStyle;
