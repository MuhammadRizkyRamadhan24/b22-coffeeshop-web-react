import React, { Component } from 'react'

import '../../styles/page-productDetail.css'

class Img extends Component{
    render(){
        return(
            <>
                <img src={this.props.image} alt="" className="rounded-full w-24 h-24"/>
            </>
        )
    }
}

export default Img