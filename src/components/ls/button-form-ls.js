import React, { Component } from 'react'

import '../../styles/page-ls.css';

class Form extends Component{
    render(){
        return(
            <>
                <button className="focus:outline-none my-4 shadow-md ls-button" type='submit'>{this.props.page}</button>
            </>
        )
    }
}

export default Form