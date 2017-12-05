

// an action exports a function
// that function MUST RETURN AN OBJECT
// that object MUST HAVE A PROP OF TYPE
// when this code runs EVERY reducer gets notified
export default function addStudents(studentName){
	console.log("Add students action is running")
	console.log(studentName)
	return{
		type: 'ADD_STUDENT',
		payload: studentName
	}
}