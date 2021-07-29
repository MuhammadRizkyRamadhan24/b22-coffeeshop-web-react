import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { FaPencilAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import img from '../assets/images/profile.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/page-profile.css';
import {
  changePassword, getUserById, userLogout, changeUser
} from '../redux/actions/user';
import { authLogout } from '../redux/actions/auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      image: '',
      showImage: '',
      phone_number: '',
      address: '',
      display_name: '',
      first_name: '',
      last_name: '',
      date_birth: '',
      gender: '',
      oldPassword: '',
      newPassword: '',
      modalIsOpen: false,
      buttonIsOpen: false,
      forUpdate: false,
      loading: true
    };
  }

  componentDidMount() {
    this.getDataUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.forUpdate !== this.state.forUpdate) {
      this.setButton();
      this.getDataUser();
    }
  }

  changeUser = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Update data user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6A4029',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        if (this.state.image === '') {
          const data = {
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            display_name: this.state.display_name,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            date_birth: this.state.date_birth,
            gender: this.state.gender
          };
          const { token } = this.props.auth;
          const { forUpdate } = this.state;
          this.props.changeUser(token, data)
            .then(async () => {
              if (this.props.user.msg === 'User updated successfully!') {
                await Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Data User Updated!',
                  showConfirmButton: false,
                  timer: 1500
                }).then(() => {
                  this.setState({
                    forUpdate: !forUpdate
                  });
                });
              } else {
                await Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: `${this.props.user.msg}`,
                  showConfirmButton: false,
                  timer: 1500
                })
                  .then(() => {
                    this.setState({
                      forUpdate: !forUpdate
                    });
                  });
              }
            }).catch((err) => {
              console.log(err);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong'
              });
            });
        } else {
          const data = {
            email: this.state.email,
            image: this.state.image,
            phone_number: this.state.phone_number,
            address: this.state.address,
            display_name: this.state.display_name,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            date_birth: this.state.date_birth,
            gender: this.state.gender
          };
          const { token } = this.props.auth;
          const { forUpdate } = this.state;
          this.props.changeUser(token, data)
            .then(async () => {
              if (this.props.user.msg === 'User updated successfully!') {
                await Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Data User Updated!',
                  showConfirmButton: false,
                  timer: 1500
                }).then(() => {
                  this.setState({
                    forUpdate: !forUpdate
                  });
                });
              } else {
                await Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: `${this.props.user.msg}`,
                  showConfirmButton: false,
                  timer: 1500
                })
                  .then(() => {
                    this.setState({
                      forUpdate: !forUpdate
                    });
                  });
              }
            }).catch((err) => {
              console.log(err);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong'
              });
            });
        }
      }
    });
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  openCloseButton = () => {
    const { buttonIsOpen } = this.state;
    this.setState({
      buttonIsOpen: !buttonIsOpen
    });
  }

  getDataUser = () => {
    const { token } = this.props.auth;
    this.props.getUserById(token)
      .then(() => {
        const parse = Date.parse(this.props.user.data[0].date_birth);
        const newDate = new Date(parse);
        const date = newDate.getDate();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const final = `${year}-${month + 1}-${date}`;
        this.setState({
          email: this.props.user.data[0].email,
          showImage: this.props.user.data[0].image,
          phone_number: this.props.user.data[0].phone_number,
          address: this.props.user.data[0].address,
          display_name: this.props.user.data[0].display_name,
          first_name: this.props.user.data[0].first_name,
          last_name: this.props.user.data[0].last_name,
          date_birth: final,
          gender: this.props.user.data[0].gender,
          loading: false
        });
      });
  }

  changePassword = () => {
    const { token } = this.props.auth;
    const { oldPassword, newPassword } = this.state;
    this.props.changePassword(token, oldPassword, newPassword)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: `${this.props.user.msg}`,
          showConfirmButton: true,
          confirmButtonColor: '#6A4029'
        });
        this.closeModal();
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong'
        });
      });
  }

  logout = () => {
    this.props.authLogout();
    this.props.userLogout();
  }

  setButton = () => {
    this.setState({
      buttonIsOpen: false
    });
  }

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '18px'
      },
      overlay: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      }
    };
    return (
      <div className="flex flex-col min-h-full">
        <Header history={this.props.history} />

        <div className="flex flex-col w-full profile-wrap p-12 md:p-28 h-auto">
          <div className="profile-title text-3xl py-4 h-1/6">User Profile</div>
          <div className="flex flex-col md:flex-row w-full h-2/6 mb-16">
            <div className="flex flex-col mb-8 md:mb-0 w-full md:w-4/12 bg-white py-4 mr-8 rounded-md profile-border justify-center items-center">
              <img className="rounded-full w-36 h-36 object-cover object-center" src={this.state.showImage === null ? img : `http://localhost:8880/static/images/${this.state.showImage}`} alt=" " />
              <button type="button" onClick={this.openCloseButton} className="focus:outline-none flex justify-center items-center rounded-full h-8 w-8 mr-3 profile-bi profile-bi-p">
                <FaPencilAlt className="text-white" />
              </button>
              {this.state.buttonIsOpen === true ? <input className="w-48 mb-2" name="image" onChange={(e) => this.setState({ image: e.target.files })} type="file" accept="image/x-png,image/gif,image/jpeg" /> : <></>}
              {this.state.loading ? <></> : (
                <>
                  <div className="text-xl text-center profile-name">{this.props.user.data[0].display_name}</div>
                  <div className="text-xs profile-email">{this.props.user.data[0].email}</div>
                </>
              )}
            </div>
            <div className="flex flex-col w-full md:w-8/12 bg-white py-4 px-8 rounded-md profile-border">
              <div className="flex flex-row w-full h-1/6">
                <div className="flex w-2/4 items-center justify-start profile-textContact text-2xl">Contacts</div>
                <div className="flex w-2/4 items-center justify-end">
                  <button className="focus:outline-none flex justify-center items-center rounded-full profile-bi p-2" type="submit">
                    <FaPencilAlt className="text-white" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-wrap w-full py-8 h-4/6">
                <label className="profile-label text-lg pr-2">Email adress:</label>
                <input className="focus:outline-none profile-input" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }); }} type="email" id="email" name="email" placeholder="Enter your value" />

                <label className="profile-label text-lg pr-2">Delivery address:</label>
                <input className="focus:outline-none profile-input" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }); }} type="text" id="address" name="address" placeholder="Enter your value" />

                <label className="profile-label text-lg pr-2">Mobile number:</label>
                <input className="focus:outline-none profile-input" value={this.state.phone_number} onChange={(e) => { this.setState({ phone_number: e.target.value }); }} type="text" id="phone_number" name="phone_number" placeholder="Enter your value" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full h-3/6 mb-16">
            <div className="flex flex-col w-full mb-4 md:mb-0 md:w-4/6 bg-white py-4 px-8 rounded-md profile-border">
              <div className="flex flex-row w-full h-1/6">
                <div className="flex w-2/4 items-center justify-start profile-textContact text-2xl">Details</div>
                <div className="flex w-2/4 items-center justify-end">
                  <button className="focus:outline-none flex justify-center items-center rounded-full profile-bi p-2" type="submit">
                    <FaPencilAlt className="text-white" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-wrap w-full h-5/6">
                <label className="profile-label text-lg pr-2 py-4">Display name:</label>
                <input className="focus:outline-none profile-input" value={this.state.display_name} onChange={(e) => { this.setState({ display_name: e.target.value }); }} type="text" id="d-name" name="d-name" placeholder="Enter your value" />

                <label className="profile-label text-lg pr-2 py-4">First name:</label>
                <input className="focus:outline-none profile-input" value={this.state.first_name} onChange={(e) => { this.setState({ first_name: e.target.value }); }} type="text" id="f-name" name="f-name" placeholder="Enter your value" />

                <label className="profile-label text-lg pr-2 py-4">Last name:</label>
                <input className="focus:outline-none profile-input" value={this.state.last_name} onChange={(e) => { this.setState({ last_name: e.target.value }); }} type="text" id="l-name" name="l-name" placeholder="Enter your value" />

                <label className="profile-label text-lg pr-2 py-4">DD/MM/YY:</label>
                <input className="focus:outline-none profile-input" onChange={(e) => this.setState({ date_birth: e.target.value })} value={this.state.date_birth} type="date" id="l-name" name="l-name" placeholder="Enter your value" />

                <label className="profile-rb text-lg pl-8 mb-4 mt-8">
                  Male
                  <input onChange={(e) => this.setState({ gender: e.target.value })} value="male" type="radio" id="male" name="gender" />
                  <span className="checkmark" />
                </label>

                <label className="profile-rb text-lg pl-8 my-4">
                  Female
                  <input onChange={(e) => this.setState({ gender: e.target.value })} value="female" type="radio" id="female" name="gender" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-2/6 px-4">
              <div className="flex justify-center text-lg items-center profile-title-2">Do you want to save the change?</div>
              <button onClick={this.changeUser} className="focus:outline-none my-4 shadow-md text-lg profile-button-b" type="submit">Save change</button>
              <button type="button" className="focus:outline-none mt-1 mb-8 shadow-md text-lg profile-button-y">Cancel</button>
              <button type="button" onClick={this.openModal} className="focus:outline-none my-4 shadow-md text-lg profile-button-w">Change Password</button>
              <button type="button" onClick={this.logout} className="focus:outline-none mt-1 mb-4 shadow-md text-lg profile-button-w">Log out</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
              >
                <div className="flex flex-col justify-center items-center h-72 w-96">
                  <p className="text-xl text-center h-auto font-normal history-font m-5">Are you sure want to change password?</p>
                  <input className="focus:outline-none ls-inputForm text-base" type="password" id="oldPassword" name="oldPassword" placeholder="Your Old Password" value={this.state.oldPassword} onChange={(e) => this.setState({ oldPassword: e.target.value })} />
                  <input className="focus:outline-none ls-inputForm text-base" type="password" id="newPassword" name="newPassword" placeholder="Your New Password" value={this.state.newPassword} onChange={(e) => this.setState({ newPassword: e.target.value })} />
                  <div className="flex flex-row justify-center items-center w-full">
                    <button type="button" onClick={this.closeModal} className="focus:outline-none profile-button-w mr-8">Cancel</button>
                    <button type="button" onClick={this.changePassword} className="focus:outline-none profile-button-b ml-8">Change</button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = {
  getUserById,
  changePassword,
  authLogout,
  userLogout,
  changeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);