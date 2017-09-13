import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SerializedForm from './components/SerializedForm';
import StylishForm from './components/StylishForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				{/* <SerializedForm /> */}
				<StylishForm />
			</MuiThemeProvider>
		);
	}
}

export default App;
