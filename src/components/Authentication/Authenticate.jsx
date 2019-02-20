import React from 'react';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: true,
      };
    }
    render() {
      if (this.state.login === true) {
        return <App />
      }
      return "hello";
    }
  };

export default Authenticate;