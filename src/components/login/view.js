import React from 'react';
import { Button } from "react-foundation";
import "./scss/index.css";


class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
    this.onLogin = this.onLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  onLogin(event) {
    event.preventDefault();
    this.props.onLogin(this.state.email.toLowerCase());
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    const {
      className = "",
      error
    } = this.props;
    return (
      <form onSubmit={this.onLogin} className={`Login ${className}`}>
        <div className="grid-container">
          <div className="grid-x">
            <input className={`Login-input small-7 cell`} name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
            <Button type="submit" >Login</Button>
          </div>
          {
            error &&
             <span>{error}</span>
          }
        </div>
      </form>
    )
  };
};

export { LoginView };
