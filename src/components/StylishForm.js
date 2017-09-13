import React, { Component } from 'react';

import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { pink500, green600 } from 'material-ui/style/color';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/FlatButton';

const ValidIcon = props =>
	<FontIcon className="muidocs-icon-action-done" color={green600} />;

const InvalidIcon = props =>
	<FontIcon className="muidocs-icon-action-home" color={pink500} />;

const FormCard = props => {
	return (
		<Card>
			<CardHeader
				title="Stylish Form"
				subtitle="An awesome material-ui form!"
			/>
			<CardTitle
				title="Complete the form"
				subtitle="Everything must be valid... OR ELSE!"
			/>
			<CardText>
				<form onSubmit={props.submit} style={{ marginLeft: '1em' }}>
					<div>
						<TextField
							name="name"
							hintText="Your name here..."
							floatingLabelText="Name"
							onChange={props.change}
							value={props.name.text}
						/>
						<ValidIcon />
					</div>
					<span>{props.name.isValid ? 'Valid' : 'Invalid'}</span>
					<br />
					Email:{' '}
					<input
						type="text"
						name="email"
						onChange={props.change}
						value={props.email.text}
					/>
					<span>{props.email.isValid ? 'Valid' : 'Invalid'}</span>
					<br />
					Phone:{' '}
					<input
						type="phone"
						name="phone"
						onChange={props.change}
						value={props.phone.text}
					/>
					<span>{props.phone.isValid ? 'Valid' : 'Invalid'}</span>
					<br />
					<button type="submit">Submit</button>
				</form>
			</CardText>
			<CardActions>
				<FlatButton label="Action1" />
				<FlatButton label="Action2" />
			</CardActions>
		</Card>
	);
};

const validators = {
	name: /^[a-zA-Z]+$/,
	email: /^\w+@\w+\.\w+$/,
	phone: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
};
export default class SerializedForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: {
				text: '',
				isValid: false
			},
			email: {
				text: '',
				isValid: false
			},
			phone: {
				text: '',
				isValid: false
			}
		};
	}

	onChange = e => {
		// Get name.
		const name = e.target.name;
		this.setState({
			[name]: {
				text: e.target.value,
				isValid: validators[name].test(e.target.value)
			}
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const state = {};
		let isValid = true;
		for (let key in this.state) {
			const val = this.state[key].text;
			const valid = validators[key].test(val);
			if (isValid) {
				isValid = valid;
			}
			state[key] = {
				...this.state[key],
				isValid: valid
			};
		}
		if (isValid) {
			//dispatch to redux here
		}
		this.setState(state);
	};

	render() {
		return (
			<FormCard change={this.onChange} submit={this.onSubmit} {...this.state} />
		);
	}
}

/*

 */
