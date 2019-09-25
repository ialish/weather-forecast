import React from 'react';
import { Card } from 'react-bootstrap';

const apiKey = 'nMRx8otmXihDcFOzxBaVBJVXM1OJ6O3Y';

class FiveDayForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DailyForecasts: []
		}
	}

	fetchForecast = () => {
		const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.props.location.key}?apikey=${apiKey}&metric=true`;

		fetch(url)
			.then(resp => resp.json())
			.then(json => this.setState({
				DailyForecasts: json.DailyForecasts
			}));
	}

	componentDidMount() {
		this.fetchForecast();
	}

	componentDidUpdate(prevProps) {
		const prevLocation = prevProps.location || {};
		if (prevLocation.key !== this.props.location.key) {
			this.fetchForecast();
		}
	}

	render() {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return (
			<div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
				{this.state.DailyForecasts.map((day, index) => {
					return (
						<Card key={index} style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{days[new Date(day.EpochDate * 1000).getDay()]}</Card.Title>
								<Card.Subtitle className="mb-2">
									{Math.round((day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2)}&deg;C
								</Card.Subtitle>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		);
	}
}

export default FiveDayForecast;