// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import Card from '../components/history/card'
import Header from '../components/header'
import Footer from '../components/footer'
import Modal from 'react-modal'
import Loader from 'react-loader-spinner'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { getHistory, getDetailHistory } from '../redux/actions/transaction'

import '../styles/page-ls.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '18px'
  },
  overlay: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
};

const customStyles2 = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '18px'
  },
  overlay: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)'
  }
};

function History(props){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalDetailIsOpen,setDetailIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function openDetailModal() {
    setDetailIsOpen(true);
  }

  function closeDetailModal(){
    setDetailIsOpen(false);
  }

  

  const getHistoryDetail = (id) => {
    const {token} = props.auth
    props.getDetailHistory(token, id)
  }

  const buttonHistory = async (id) => {
    await getHistoryDetail(id)
    openDetailModal()
  }

  

  // useEffect (()=>{
  //   getHistory()
  // },  [])

  useEffect (()=>{
    const getHistory = () => {
      const {token} = props.auth
      props.getHistory(token);
    }
    getHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [])

    return (
        <div className="flex flex-col min-h-full">
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            >
                <div className="flex flex-col justify-center items-center h-48 w-96">
                    <p className="text-xl text-center h-2/6 font-normal history-font m-5">Are you sure want to delete the all items?</p>
                    <div className="flex flex-row justify-center items-center w-full">
                        <button onClick={closeModal} className="focus:outline-none profile-button-w mr-8">Cancel</button>
                        <button className="focus:outline-none profile-button-b ml-8">Delete</button>
                    </div>
                </div>
            </Modal>
                
            <Header history={props.history}/>
            {props.transaction.data.length > 0 ?
            <div className="flex flex-col w-full justify-center items-center text-center history-wrap">
                <div className="flex flex-col justify-center items-center h-1/5 w-full my-24">
                    <h1 className="text-4xl font-bold history-font text-white">Let’s see what you have bought!</h1>
                    <p className="text-xl font-normal history-font text-white">Select item to delete</p>
                </div>
                <div className="flex flex-row justify-end items-center w-full px-10">
                    <button onClick={openModal} className="focus:outline-none text-white history-font p-2">Delete All</button>
                </div>
                <div className="grid grid-cols-3 gap-4 h-4/5 w-full p-16">
                  {props.transaction.data.length > 0 ? 
                  props.transaction.data.map((d,i) => (
                    <div key={d.id}>
                      <Card code={d.code} total={d.total} tax={d.tax} func={() => buttonHistory(d.id)} shipping_cost={d.shipping_cost}/>
                      <Modal
                      isOpen={modalDetailIsOpen}
                      onRequestClose={closeDetailModal}
                      style={customStyles2}
                      ariaHideApp={false}
                      >
                          <div className="flex flex-col justify-center items-center h-96 w-96">
                            <div className="text-xl font-bold history-font">{props.transaction.detailData.code}</div>
                            <div className="flex flex-col h-48 w-80 overflow-y-auto">
                              {typeof props.transaction.detailData === 'object' ?
                                  props.transaction.detailData.items.map((d,i)=> (
                                  <div key={d.id} className="flex flex-row my-4 mx-4 text-lg items-center">
                                      <img className="w-20 h-20 rounded-full mr-4" src={`http://localhost:8880/static/images/${d.image}`} alt=""/>
                                      <div className="flex flex-col w-full pr-4 history-font">
                                          <p>{d.item_name}</p>
                                          <p>({d.amount})</p>
                                          <p>{d.variant}</p>
                                      </div>
                                      <div className="flex justify-end items-center text-center history-font">
                                          <p>IDR {d.price}</p>
                                      </div>
                                  </div>
                                  ))
                              :
                              <></>
                              }
                            </div>
                            <div className="text-left w-72 h-auto text-sm font-normal history-font"> Shipping Cost : IDR {props.transaction.detailData.shipping_cost}</div>
                            <div className="text-left w-72 h-auto text-sm font-normal history-font"> Tax : IDR {props.transaction.detailData.tax}</div>
                            <div className="text-left w-72 h-auto text-sm font-bold pb-2 history-font"> Total : IDR {props.transaction.detailData.total}</div>
                            <div className="text-left w-72 h-auto text-sm font-normal history-font"> Shipping Address : {props.transaction.detailData.shipping_address}.</div>
                            <div className="text-left w-72 text-sm font-normal history-font">Payment Method : {props.transaction.detailData.payment_method}</div>
                            <button onClick={closeDetailModal} className="focus:outline-none w-48 py-2 my-2 font-bold profile-button-white">Close</button>
                          </div>
                      </Modal>
                    </div>
                  ))
                  :
                  <>
                  </>
                  }
                </div>
            </div>
            :
            <div className="flex flex-col w-full justify-center items-center text-center history-wrap">
                <Loader
                type='TailSpin'
                color="#fff"
                height={50}
                width={100}
                />
            </div>
            }
            <Footer/>
        </div>
    );
}

// export default History;

const mapStateToProps = state =>({
  auth: state.auth,
  transaction: state.transaction
});

const mapDispatchToProps = {
  getHistory,
  getDetailHistory
};
const pushRoute = withRouter(History)

export default connect(mapStateToProps,mapDispatchToProps)(pushRoute);