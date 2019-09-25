import React from 'react';
import { Alert } from 'react-bootstrap';
import FavoritesButton from './FavoritesButton/FavoritesButton';
import CurrentWeather from './CurrentWeather';
import FiveDayForecast from './FiveDayForecast';

const WeatherDetails = ({ location }) => {
	return (
		<div>
			<Alert variant={'success'} style={{ marginTop: 5, width: 460, height: 260 }}>
				<FavoritesButton location={location} />
				<CurrentWeather location={location} />
				<FiveDayForecast location={location} />
			</Alert>
		</div>
	);
}

export default WeatherDetails;