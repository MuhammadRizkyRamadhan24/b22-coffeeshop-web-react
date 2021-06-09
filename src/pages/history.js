import React from 'react';
import Card from '../components/history/card'
import Header from '../components/header'
import Footer from '../components/footer'
import Modal from 'react-modal';

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

function History(props){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
        <div className="flex flex-col min-h-full">
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div className="flex flex-col justify-center items-center h-48 w-96">
                    <p className="text-xl text-center h-2/6 font-normal history-font m-5">Are you sure want to delete the selected items?</p>
                    <div className="flex flex-row justify-center items-center w-full">
                        <button onClick={closeModal} className="focus:outline-none profile-button-w mr-8">Cancel</button>
                        <button className="focus:outline-none profile-button-b ml-8">Delete</button>
                    </div>
                </div>
            </Modal>
                
            <Header history={props.history}/>
            <div className="flex flex-col w-full justify-center items-center text-center history-wrap">
                <div className="flex flex-col justify-center items-center h-1/5 w-full my-24">
                    <h1 className="text-4xl font-bold history-font text-white">Let’s see what you have bought!</h1>
                    <p className="text-xl font-normal history-font text-white">Select item to delete</p>
                </div>
                <div className="flex flex-row justify-end items-center w-full px-10">
                    <button className="focus:outline-none text-white history-font p-2">Select All</button>
                    <button onClick={openModal} className="focus:outline-none text-white history-font p-2">Delete</button>
                </div>
                <div className="grid grid-cols-3 gap-4 h-4/5 w-full p-16">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default History;