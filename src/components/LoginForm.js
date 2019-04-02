import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const{username, password} = this.state;
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" placeholder="Username" onChange={this.handleInputChange} required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;