/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../../styles/page-ls.css';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component {
  render() {
    const {
      label, type, id, name, placeholder, value, func
    } = this.props;
    return (
      <>
        <label type="" className="text-base">{label}</label>
        <br />
        <input className="focus:outline-none ls-inputForm text-base" type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={func} />
        <br />
      </>
    );
  }
}

export default Form;
