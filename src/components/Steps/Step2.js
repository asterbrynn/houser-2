import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step2 extends Component {
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
					<label htmlFor="image">Image URL: </label>
					<input name="image" id="image" type="text"
						onChange={this.handleChange}/>
				</p>
				<Link to="/wizard/step1">Step 1</Link>
				<Link to="/wizard/step3">Step 3</Link>
			</div>
		)
	}
}