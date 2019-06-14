import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Step3 extends Component {
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleAdd = () => {
		let {name, address, city, state, zip} = this.state;
		axios.post('/api/house', {name, address, city, state, zip}).then(res => {
			this.setState({
				name,
				address,
				city,
				state,
				zip
			})
		}).catch(err => console.log("posting error", err))
	}

	render() {
		return(
			<div>
				<p>
					<label htmlFor="mortgage">Monthly Mortgage Amount: </label>
					<input name="mortgage" id="mortgage" type="number"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="rent">Desired Monthly Rent: </label>
					<input name="rent" id="rent" type="number"
						onChange={this.handleChange}/>
				</p>
				<Link to="/wizard/step2">Step 2</Link>
				<button onClick={this.handleAdd}>
					<Link to="/">Complete</Link>
				</button>
			</div>
		)
	}
}