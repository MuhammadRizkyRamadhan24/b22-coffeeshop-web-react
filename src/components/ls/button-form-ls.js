import React, { Component } from 'react'

import '../../styles/page-ls.css';

class Form extends Component{
    goToDefinition = () =>{
        // console.log(this.props.history);
        this.props.history.push(`/${this.props.definition}`)
    }
    render(){
        console.log(this.props);
        return(
            <>
                <button className="focus:outline-none my-4 shadow-md ls-button" onClick={this.goToDefinition}>{this.props.page}</button>
            </>
        )
    }
}

export default Form