import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED} from './constants.js';

const initialState = {
	searchField: ''
}

export const searchRobots= (state=initialState,action={}) =>{
	console.log(action.type)
	console.log({ ...state, searchField: action.payload})
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		return { ...state, searchField: action.payload}
		default:
		return state;
	}
}

const initialStateRobots = {
  robots: [],
  isPending: true
}

export const requestRobots = (state= initialStateRobots,action={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending :true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending :false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload,isPending :false})
	default:
	return state

	}
}