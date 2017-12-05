// is in containers because it needs to know about redux
import React, { Component } from 'react'

// we need some glue...this component/container needs to kow about the store (redux)
// so we can use its state (and update it if needed). to accomplish this, we can use
// the connect method from react-redux
import { connect } from 'react-redux'

class Students extends Component{
	render(){
		return(
			<h1>Students Component</h1>
		)
	}
}

// in containers(Components that need to know about redux), we dont export the component...
// we export connect. We pass connect a function and we pass the component
export default connect()(Students)