import React, { Component } from 'react'
import img from '../../assets/images/spageti.png'

import '../../styles/page-history.css'

class Card extends Component{
    render(){
        return(
            <>
                <div className="flex flex-row rounded-2xl bg-white h-24">
                    <div className="flex items-center justify-center w-2/6 h-full">
                        <img src={img} className="rounded-full w-16 h-16" alt=" "/>
                    </div>
                    <div className="flex flex-col items-start justify-center w-4/6 h-full pr-3 py-3">
                        <p className="text-xl h-2/6 font-bold history-font">Veggie tomato mix</p>
                        <div className="flex h-4/6 flex-row w-full">
                            <div className="flex flex-col items-start py-1 w-4/5">
                                <p className="text-normal font-thin history-font">IDR 34.000</p>
                                <p className="text-normal font-thin history-font">Delivered to Table 4</p>
                            </div>
                            <div className="flex justify-center items-end w-1/5">
                                <input
                                name="isGoing"
                                type="checkbox"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card