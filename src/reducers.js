import {
	SET_ROUTE,
	SET_LOCATION,
	REQUEST_CURRENT_POSITION_PENDING,
	REQUEST_CURRENT_POSITION_SUCCESS,
	REQUEST_CURRENT_POSITION_FAILED
} from './actionTypes'

import {
	UPDATE_INPUT,
	REQUEST_SEARCH_OPTIONS_PENDING,
	REQUEST_SEARCH_OPTIONS_SUCCESS,
	REQUEST_SEARCH_OPTIONS_FAILED
} from './actionTypes'

/* App component */

const initialStateRoute = {
	route: 'home'
};

export const changeRoute = (state = initialStateRoute, action) => {
	switch(action.type) {
		case SET_ROUTE:
			return { ...state, ...{ route: action.payload } };
		default:
			return state;
	}
}

const defaultLocation = {
	key: '215854',
	city: 'Tel Aviv'
};

const initialStateLocation = {
	isPending: false,
	location: defaultLocation,
	error: ''
};

export const changeLocation = (state = initialStateLocation, action) => {
	switch (action.type) {
		case SET_LOCATION:
			return { ...state, ...{ location: action.payload } };
		case REQUEST_CURRENT_POSITION_PENDING:
			return { ...state, ...{ isPending: true } };
		case REQUEST_CURRENT_POSITION_SUCCESS:
			return { ...state, ...{ location: action.payload, isPending: false } };
		case REQUEST_CURRENT_POSITION_FAILED:
			return { ...state, ...{ error: action.payload, isPending: false } };
		default:
			return state;
	}
}

/* SearchField component */

const initialStateInput = {
	query: '',
	isLoading: false,
	options: [],
	error: ''
};

export const changeInput = (state = initialStateInput, action) => {
	switch (action.type) {
		case UPDATE_INPUT:
			return { ...state, ...{ query: action.payload } };
		case REQUEST_SEARCH_OPTIONS_PENDING:
			return { ...state, ...{ isLoading: true } };
		case REQUEST_SEARCH_OPTIONS_SUCCESS:
			return { ...state, ...{ options: action.payload, isLoading: false } };
		case REQUEST_SEARCH_OPTIONS_FAILED:
			return { ...state, ...{ error: action.payload, isLoading: false } };
		default:
			return state;
	}
}