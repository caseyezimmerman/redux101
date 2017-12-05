// is in containers because it needs to know about redux
import React, { Component } from 'react'

// we need some glue...this component/container needs to kow about the store (redux)
// so we can use its state (and update it if needed). to accomplish this, we can use
// the connect method from react-redux
import { connect } from 'react-redux'

// we need bind action creators from redux so that we can get the actions
// to dispatch to the reducers
import { bindActionCreators } from 'redux'; //only redux cares about this

// go get the addStudent action so we can use it
import AddStudent from '../actions/addStudent'

class Students extends Component{
	constructor(){
		super();
		this.addNewStudent = this.addNewStudent.bind(this);
	}

	addNewStudent(){
		var name = document.getElementById('student-name').value;
		// console.log(name)
		this.props.addStudent(name);
	}

	render(){
		console.log(this.props)
		var studentArray = this.props.students.map((student,index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat} in the {student.row}nd row</li>)
		});
		return(
			<div>
				<input id="student-name" type="text" placeholder="name of student" />
				<button onClick={this.addNewStudent}>Add Student</button>
				<h1>Students Component</h1>
				{studentArray} {/*the results of mapping through each invididual element*/ }
			</div>
		)
	}
}

// we need a fuction to map the redux state to THIS components props
function mapStateToProps(state){
	// the state parameter is the root reducer
	// this function will return an object
	// property will be the prop in THIS component 
	// the value will be the piece of state from the reducer
	return{
		// this will create a this.props.studets
		students: state.students
	}
}

function mapDispatchToProps(dispatch){
	// bindActionCreators takes an object as first parameter
	// properry is the local prop name (ex: this.props.x)
	// value is the callback (the actionn file.js)
	// the SECOND param is the dispatcher
	return bindActionCreators({
		// we now have a this.props.addStudent
		addStudent: AddStudent
	},dispatch);
}

// in containers(Components that need to know about redux), we dont export the component...
// we export connect. We pass connect a function and we pass the component
// export default connect(mapStateToProps)(Students)

// when exporting connect, state ALWAYS comes first
// when exporting connect, action comes second
export default connect(mapStateToProps,mapDispatchToProps)(Students)
// if youre using actions and not state, you must put null in place of state


