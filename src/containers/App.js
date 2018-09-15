import React, { Component } from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [], //this robots can change name what do you want
			searchfield: ''
		}
		console.log("constructor");
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then( users => {
				this.setState({ robots: users }) //delete robots: users to show loading because didmount have milisecond render for updating
			});
			
		console.log("componentDidMount");
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const {robots,searchfield} = this.state;
		const filterrobot = robots.filter( robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
			// includes does mean binary search. so algorithm this return name robot and compare than includes searchfield
		});
		console.log("render");

		return !robots.length 
			   ? (
					<div className="tc">
						<h1>Loading</h1>
					</div>
				 )

					: (
						<div className='tc'>
							<h1 className='f2'>RoboFriends</h1>
							<SearchBox searchChange={this.onSearchChange}/>
							<Scroll>
								<ErrorBoundary>
									<Cardlist robots = {filterrobot} />
								</ErrorBoundary>
							</Scroll>
						</div>
					  )

	}
}

export default App;
