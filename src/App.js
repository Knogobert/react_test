import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Train from './Train';
import Person from './Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				<Train>
					<Person name="Sven" age={23} />
					<Person name="Malin" age={24} />
				</Train>
			</div>
		);
	}
}

export default App;
