const appTheme = {
	colors: {
		main: '#39daa2',
		secondary: '#282c34',
		third: '#FFFFFF',
	},
	fontColors: {
		main: '#282c34',
		secondary: '#FFFFFF',
		third: '#000000',
	},
	fontSize: {
		sm: '1rem',
		md: '3.5rem',
		lg: '5rem',
	},
	screenSize: {
		phone: '320px',
		tablet: '961px',
		desktop: '1025px',
	},
};

export type ThemeType = typeof appTheme;

export default appTheme;
