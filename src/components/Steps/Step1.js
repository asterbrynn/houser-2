import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step1 extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zip: 0
		}
	}
	
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}

	render() {
		return(
			<div>
				<p>
					<label htmlFor="name">Name: </label>
					<input name="name" id="name" type="text"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="address">Street Address: </label>
					<input name="address" id="address" type="text"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="city">City: </label>
					<input name="city" id="city" type="text"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="state">State: </label>
					<input name="state" id="state" type="text"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="zip">Zip Code: </label>
					<input name="zip" id="zip" type="number"
						onChange={this.handleChange}/>
				</p>
				<Link to="/wizard/step2">Step 2</Link>
			</div>
		)
	}
}