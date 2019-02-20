import React from 'react';

const Authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        login: false,
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ login: false });
      } else {
        this.setState({ login: true });
      }
    }
    isLoggingIn = () => {
      this.setState({user: true})
      localStorage.setItem('user', JSON.stringify(true));
      window.location.reload();
    }
    render() {
      if (this.state.login === true) {
        return <App />;
      }
      return <Login isLoggingIn={this.isLoggingIn}/>;
    }
  };

export default Authenticate;