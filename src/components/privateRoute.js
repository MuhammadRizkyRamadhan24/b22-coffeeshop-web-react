import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

// class privateRoute extends Component {
//     render(){
//         const {token} = this.props.auth
//         return (
//             <Route {...this.props} render={(props) => {
//                 if (token !== null){
//                     return (this.props.children)
//                 } else {
//                     return (<Redirect to='/login'/>)
//                 }
//             }}
//             />
//         )
//     }
// }

const privateRoute = ({children, auth, ...rest}) => {
    const {token} = auth
    return (
        <Route {...rest}
        render={(props) => {
            if (token !== null){
                return (children)
            } else {
                return (<Redirect to='/login'/>)
            }
        }}/>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(privateRoute)