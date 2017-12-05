// Reducers are functions that return a piece of state

const students = [
		{
			name: "Jason",
			seat: 5,
			row: 2
		},
		{
			name: "Chris",
			seat: 6,
			row: 2
		},
		{
			name: "Casey",
			seat: 13,
			row: 2
		},
		{
			name: "Jamie",
			seat: 12,
			row: 2
		}
	]


// all reducer functions have 2 parameters
// 1. current state
// 1b. usually you will want to provide a default state
// 2. info that came from the action
export default function(state = students, action){
	if(action.type === "ADD_STUDENT"){
		console.log(action);
		let newStudents = state.slice(); //making a copy of the array bc we cant mess wtih state
		newStudents.push({
			name: action.payload
		})
		return newStudents;
	}
	
	
	return state
}
