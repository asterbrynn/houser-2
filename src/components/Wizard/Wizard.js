import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';



export default class Wizard extends Component {
	render() {
		return(
			<div>
				<h1>Add New Listing</h1>
				<button>
					<Link to="/">Cancel</Link>
				</button>
				<Route path="/wizard/step1" component={Step1}/>
				<Route path="/wizard/step2" component={Step2}/>
				<Route path="/wizard/step3" component={Step3}/>
			</div>
		)
	}
}