import React, { Component } from 'react';

import '../../styles/page-ls.css';

class Form extends Component{
    goToDefinition = () =>{
        this.props.history.push(`/${this.props.definition}`)
    }

    render(){
        return(
            <>
                <button className="focus:outline-none rounded-full ls-buttonTop" onClick={this.goToDefinition}>{this.props.page}</button>
            </>
        )
    }
}

export default Form