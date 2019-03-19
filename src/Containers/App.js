import React from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'; 
import Scroll from '../Components/Scroll';
import {robots} from '../Robots';
import {setSearchField, requestRobots} from '../actions.js'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	onSearchChange  : (event) => dispatch(setSearchField(event.target.value)),
	onRequestRobots : () => dispatch(requestRobots())
	}
}
class App extends React.Component {
	
	
	componentDidMount () {
		this.props.onRequestRobots();
	}

	render(){
		
		const {searchField, robots, isPending, onSearchChange} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
			}
		)
	
	return isPending ? 
	<h1 className='tc'>Loading</h1> :

	 (
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);