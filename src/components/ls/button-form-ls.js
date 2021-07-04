import React, { Component } from 'react';
import '../../styles/page-ls.css';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component {
  render() {
    const { page } = this.props;
    return (
      <>
        <button className="focus:outline-none my-4 shadow-md ls-button" type="submit">{page}</button>
      </>
    );
  }
}

export default Form;
