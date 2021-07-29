import React, { Component } from 'react';
import '../../styles/page-ls.css';

class ButtonMiniLs extends Component {
  goToDefinition = () => {
    const { history, definition } = this.props;
    history.push(`/${definition}`);
  }

  render() {
    const { page } = this.props;
    return (
      <>
        <button type="button" className="focus:outline-none rounded-full ls-buttonTop text-xs md:text-base" onClick={this.goToDefinition}>{page}</button>
      </>
    );
  }
}

export default ButtonMiniLs;