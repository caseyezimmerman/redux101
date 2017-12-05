// this is our master reducer file
// it doesn't manage any particular piece of state
// it simplt contains all the individual pieces of state/the reducers
// I.e. a reducer contains a piece of state, the root reducer contains all reducers


// the root reducer neither know nor care about react, i am seperate
// I am independent, i just care about redux
import { combineReducers } from 'redux';

// import each individual reducer
import StudentReducer from './StudentReducer';

// build the root reducer using combine reducer which we imported from redux
// combine redcuers takes one arg, an object
const rootReducer = combineReducers({
	// the name of the state will be the property(used by react)
	// the value will be the reducer file import
	students: StudentReducer
})

export default rootReducer;