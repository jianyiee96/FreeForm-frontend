import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './indexStyles';
import reportWebVitals from './reportWebVitals';
import appTheme from './styles/Theme';
import Router from './router/Router';

ReactDOM.render(
	<React.StrictMode>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
		/>
		<ThemeProvider theme={appTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
