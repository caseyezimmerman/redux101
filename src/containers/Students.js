// is in containers because it needs to know about redux
import React, { Component } from 'react'

// we need some glue...this component/container needs to kow about the store (redux)
// so we can use its state (and update it if needed). to accomplish this, we can use
// the connect method from react-redux
import { connect } from 'react-redux'

class Students extends Component{
	render(){
		console.log(this.props.students)
		var studentArray = this.props.students.map((student,index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat} in the {student.row}nd row</li>)
		});
		return(
			<div>
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

// in containers(Components that need to know about redux), we dont export the component...
// we export connect. We pass connect a function and we pass the component
export default connect(mapStateToProps)(Students)