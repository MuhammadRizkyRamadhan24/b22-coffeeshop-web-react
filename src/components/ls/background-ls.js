import React, { Component } from 'react';
import background from '../../assets/images/login-signup.png';

import '../../styles/page-ls.css';

// eslint-disable-next-line react/prefer-stateless-function
class Background extends Component {
  render() {
    return (
      <>
        <img src={background} alt="" className="w-full h-full ls-backgroundLeft" />
      </>
    );
  }
}

export default Background;
