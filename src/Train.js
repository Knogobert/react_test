import React, { Component } from 'react'

const style = {
	container: {
		border: "1px solid red"
	}
}

export default class Train extends Component {

	constructor(props){
		super(props)

		this.state = {
			moving: this.props.moving ? this.props.moving : false
		}
	}

	_toggleEngines = ()=>{
		this.setState({ moving: !this.state.moving})
	}

	// startEngines () {
	// 	this.setState({moving: true})
	// }

	render() {
		return (
			<div style={style.container}>
				<h1>Tåååg - {this.state.moving ? 'Rullar' : 'Står still'}</h1>
				<button onClick={this._toggleEngines}>{this.state.moving ? 'Kör' : 'Stanna'}</button>
				{/* <button onClick={this.startEngines.bind(this)}>Köör</button> */}
				{this.props.children}
			</div>
		)
	}
}
