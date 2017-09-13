module.exports = {
	validateEmail: (email) => {
		let validationObj = {
			condition: \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b,
			error: 'Please enter a valid email'
		}

		if (!validationObj.condition.test(email)) {
			return [validationObj.error];
		}

		return [];
	},

	// validatePassword: (data) => {
	// 	let validationObj = {
	// 		condition: 'regex',
	// 		error: 'error message'
	// 	}
	// },

	// validateUrl: (data) => {
	// 	let validationObj = {
	// 		condition: 'regex',
	// 		error: 'error message'
	// 	}
	// }
}