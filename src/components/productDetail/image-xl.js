import React, { Component } from 'react'

import '../../styles/page-productDetail.css'

class Img extends Component{
    render(){
        return(
            <>
                <img src={`http://localhost:8880/static/images/${this.props.image}`} alt="" className="rounded-full w-full h-full"/>
            </>
        )
    }
}

export default Img