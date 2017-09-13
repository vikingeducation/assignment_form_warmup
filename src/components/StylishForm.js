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
import { pink500, green600 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/RaisedButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import 'material-design-icons/iconfont/material-icons.css';

const Showable = props => {
	return props.condition ? props.children : null;
};

const ValidIcon = props => {
	const color = props.condition ? green600 : pink500;
	const type = props.condition ? 'done' : 'error_outline';
	return (
		<FontIcon className="material-icons" color={color}>
			{type}
		</FontIcon>
	);
};

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
							autoComplete="false"
							name="name"
							hintText="Your name here..."
							floatingLabelText="Name"
							onChange={props.change}
							value={props.name.text}
						/>
						<Showable condition={props.name.text.length}>
							<ValidIcon condition={props.name.isValid} />
						</Showable>
					</div>
					<div>
						<TextField
							autoComplete="false"
							name="email"
							hintText="Your email here..."
							floatingLabelText="Email"
							onChange={props.change}
							value={props.email.text}
						/>
						<Showable condition={props.email.text.length}>
							<ValidIcon condition={props.email.isValid} />
						</Showable>
					</div>
					<div>
						<TextField
							autoComplete="false"
							name="phone"
							hintText="Your Phone here..."
							floatingLabelText="Phone"
							onChange={props.change}
							value={props.phone.text}
						/>
						<Showable condition={props.phone.text.length}>
							<ValidIcon condition={props.phone.isValid} />
						</Showable>
					</div>
					<br />
					<CardActions>
						<RaisedButton
							onClick={props.successOpen}
							type="submit"
							label="Submit"
							secondary={true}
						/>
					</CardActions>
				</form>
			</CardText>
		</Card>
	);
};

const SuccessDialog = props => {
	const actions = [
		<FlatButton
			label="Done"
			primary={true}
			keyboardFocused={true}
			onClick={props.handleClose}
		/>
	];
	return (
		<div>
			<Dialog
				title="Form Submitted Successfully!"
				actions={actions}
				modal={false}
				open={props.open}
				onRequestClose={props.handleClose}
			>
				<h2>
					Congratulations, you submitted the form and everything was valid.
					Luckily, everything was valid, because you don't want to know what
					would've happened if everything wasn't valid.
				</h2>
			</Dialog>
		</div>
	);
};

const validators = {
	name: /^[a-zA-Z\s]+$/,
	email: /^\w+@\w+\.\w+$/,
	phone: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
};
export default class SerializedForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			successDialogOpen: false,
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

	successDialogHandleClose = () => {
		this.setState({ successDialogOpen: false });
	};

	successDialogHandleOpen = () => {
		this.setState({ successDialogOpen: true });
	};

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
		for (let key in validators) {
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
		this.setState(state);
		if (isValid) {
			this.successDialogHandleOpen(e);
		}
	};

	render() {
		return (
			<div>
				<FormCard
					change={this.onChange}
					submit={this.onSubmit}
					{...this.state}
				/>
				<SuccessDialog
					handleClose={this.successDialogHandleClose}
					open={this.state.successDialogOpen}
				/>
			</div>
		);
	}
}
