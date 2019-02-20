import React from 'react';

const Authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        login: false,
      };
    }
    isLoggingIn = () => {
      this.setState({login: true})
    }
    render() {
      if (this.state.login === true) {
        return <App />;
      }
      return <Login isLoggingIn={this.isLoggingIn}/>;
    }
  };

export default Authenticate;