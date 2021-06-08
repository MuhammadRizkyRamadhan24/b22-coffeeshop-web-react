import React, { Component } from 'react'

import '../../styles/page-ls.css';

class Form extends Component{
    render(){
        return(
            <>
                <label className="text-base" for={this.props.for}>{this.props.label}</label><br/>
                <input className="focus:outline-none ls-inputForm text-base" type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder}/><br/>
            </>
        )
    }
}

export default Form