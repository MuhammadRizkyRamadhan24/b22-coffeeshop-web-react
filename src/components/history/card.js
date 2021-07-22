import React, { Component } from 'react';
import '../../styles/page-history.css';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  render() {
    const {
      func, total, code, tax, shipping_cost,
    } = this.props;
    return (
      <>
        <div className="flex flex-row rounded-2xl bg-white h-32">
          <div className="flex flex-col items-start justify-center w-full h-full px-5 py-3">
            <button type="button" onClick={func} className="focus:outline-none text-xl h-2/6 font-bold history-font">{code}</button>
            <div className="flex h-4/6 flex-row w-full">
              <div className="flex flex-col items-start py-1 w-4/5">
                <p className="text-sm font-thin history-font">
                  IDR
                  {' '}
                  {total}
                </p>
                <p className="text-sm font-thin history-font">
                  Tax : IDR
                  {' '}
                  {tax}
                </p>
                <p className="text-sm font-thin history-font">
                  Shipping Cost: IDR
                  {' '}
                  {shipping_cost}
                  {' '}
                </p>
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
    );
  }
}

export default Card;
