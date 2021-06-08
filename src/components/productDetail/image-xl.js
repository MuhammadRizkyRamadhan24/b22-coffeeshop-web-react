import React, { Component } from 'react'

import '../../styles/page-productDetail.css'

class Img extends Component{
    render(){
        return(
            <>
                <img src={this.props.image} alt="" className="rounded-full w-full h-full"/>
            </>
        )
    }
}

export default Img