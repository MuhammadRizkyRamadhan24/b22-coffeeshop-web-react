import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import textLogo from '../../assets/images/textLogo.png'

import '../../styles/page-ls.css';

class Logo extends Component{
    render(){
        return(
            <>
                <img src={logo} alt="" className="ls-logo"/>
                <img src={textLogo} alt="" className="ls-textLogo"/>
            </>
        )
    }
}

export default Logo