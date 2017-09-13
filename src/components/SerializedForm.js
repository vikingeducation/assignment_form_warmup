import React, { Component } from 'react';

const validators = {
	name: /^[a-zA-Z]+$/,
	email: /^\w+@\w+\.\w+$/,
	phone: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
};
export default class SerializedForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nameText: '',
			nameIsValid: false,
			emailText: '',
			emailIsValid: false,
			phoneText: '',
			phoneIsValid: false
		};
	}

	onChange = e => {
		// Get name.
		const name = e.target.name;
		this.setState({
			[`${name}Text`]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const state = {};
		for (let key in validators) {
			const val = this.state[`${key}Text`].text;
			state[`${key}IsValid`] = validators[key].test(val);
		}
		console.log(state);
		this.setState(state);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ margin: '5em' }}>
				Name:{' '}
				<input
					onChange={this.onChange}
					type="text"
					name="name"
					value={this.state.nameText}
				/>{' '}
				<span>{this.state.nameIsValid ? 'Valid' : 'Invalid'}</span>
				<br />
				Email:{' '}
				<input
					onChange={this.onChange}
					type="email"
					name="email"
					value={this.state.emailText}
				/>
				<span>{this.state.emailIsValid ? 'Valid' : 'Invalid'}</span>
				<br />
				Phone:{' '}
				<input
					onChange={this.onChange}
					type="phone"
					name="phone"
					value={this.state.phoneText}
				/>
				<span>{this.state.phoneIsValid ? 'Valid' : 'Invalid'}</span>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}
}
