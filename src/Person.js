import React, { Component } from 'react'

export default class Person extends Component {

	constructor(props){
		super(props)

		this.state = {
			name: this.props.name,
			age: this.props.age
		}
	}

	setName(name) {
		this.setState({ name: name })
	}

	render() {
		return (
			<div>
				<h1>{this.state.name} - {this.state.age}</h1>
			</div>
		)
	}
}
