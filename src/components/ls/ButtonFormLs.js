import React, { Component } from 'react';
import '../../styles/page-ls.css';

class ButtonFormLs extends Component {
  render() {
    const { page } = this.props;
    return (
      <>
        <button className="focus:outline-none my-4 shadow-md ls-button" type="submit">{page}</button>
      </>
    );
  }
}

export default ButtonFormLs;
