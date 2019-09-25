import React, { Component } from 'react';
import HeartHollow from './HeartHollow.svg';
import HeartFull from './HeartFull.svg';
import { Button } from 'react-bootstrap';

class FavoritesButton extends Component {
	constructor() {
		super();
		this.state = {
			heartImage: HeartHollow,
			favCities: []
		};
	}

	handleHeartImage = () => {
		if (this.state.favCities.find(element =>
			element.key === this.props.location.key)) {
			if (this.state.heartImage === HeartHollow)
				this.setState({ heartImage: HeartFull });
		} else {
			if (this.state.heartImage === HeartFull)
				this.setState({ heartImage: HeartHollow });
		}
	}

	componentDidMount() {
		this.handleHeartImage();
	}

	componentDidUpdate() {
		this.handleHeartImage();
	}

	addRemoveCity = () => {
		let array = [...this.state.favCities];
		
		if (this.state.heartImage === HeartHollow) {
			array.push(this.props.location);
			this.setState({
				heartImage: HeartFull,
				favCities: array
			})
		} else {
			const index = array.findIndex(element =>
				element.key === this.props.location.key);
				console.log(index);
				
			array.splice(index, 1);
			this.setState({
				heartImage: HeartHollow,
				favCities: array
			})
		}
	}

	render() {
		console.log('favCities:', this.state.favCities);
		
		return (
			<div style={{ float: 'right' }}>
				{<img src={this.state.heartImage} alt='Heart' width='35px' style={{ marginRight: 10 }}></img>}
				<Button variant="outline-danger" size="sm" onClick={this.addRemoveCity}>Add to Favorites</Button>
			</div>
		);
	}
}

export default FavoritesButton;