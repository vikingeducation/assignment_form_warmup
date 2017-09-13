import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SerializedForm from './components/SerializedForm';

class App extends Component {
	render() {
		return (
			<div>
				<SerializedForm />
			</div>
		);
	}
}

export default App;
