import React, { Component } from 'react'

import '../../styles/page-history.css'

class Card extends Component{
    
    render(){
        // console.log(this.props);
        return(
            <>
                <div className="flex flex-row rounded-2xl bg-white h-32">
                    <div className="flex flex-col items-start justify-center w-full h-full px-5 py-3">
                        <button onClick={this.props.func} className="focus:outline-none text-xl h-2/6 font-bold history-font">{this.props.code}</button>
                        <div className="flex h-4/6 flex-row w-full">
                            <div className="flex flex-col items-start py-1 w-4/5">
                                <p className="text-sm font-thin history-font">IDR {this.props.total}</p>
                                <p className="text-sm font-thin history-font">Tax : IDR {this.props.tax}</p>
                                <p className="text-sm font-thin history-font">Shipping Cost: IDR {this.props.shipping_cost} </p>
                            </div>
                            <div className="flex justify-end items-end w-1/5">
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