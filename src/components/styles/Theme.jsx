import { ThemeProvider } from 'styled-components';

const themeLight = {
	name: 'light',
	colors: {
		primary: '#efd0ca',
		secondary: '#8d7d77',
		tertiary: 'rgba(255, 255, 255, 0.5)',
		text_primary: 'black',
		text_secondary: '#a9a9a9',
	},
};

const themeDark = {
	name: 'dark',
	colors: {
		primary: '#8d7d77',
		secondary: '#efd0ca',
		tertiary: 'rgba(0, 0, 0, 0.4)',
		text_primary: 'white',
		text_secondary: 'black',
	},
};

const Theme = ({ children, theme }) => {
	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>{children}</ThemeProvider>
	);
};

export default Theme;
