import React, { Component } from 'react';
import '../../styles/page-ls.css';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component {
  goToDefinition = () => {
    const { history, definition } = this.props;
    history.push(`/${definition}`);
  }

  render() {
    const { page } = this.props;
    return (
      <>
        <button type="button" className="focus:outline-none rounded-full ls-buttonTop" onClick={this.goToDefinition}>{page}</button>
      </>
    );
  }
}

export default Form;