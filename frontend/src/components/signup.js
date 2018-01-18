import React from "react"
import "./signup.css"

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleUsernameInput = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleEmailInput = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordInput = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(("http://localhost:8080/user"), {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      console.log(response)
      response.json()
    }).catch(err => {
      console.log("wrong", err)
    })
    this.setState({
      username: "",
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div className="signUpForm">
        <h1>Create a user</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameInput}
            placeholder="username"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
            required />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailInput}
            placeholder="email"
            required />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordInput}
            placeholder="password"
            minLength="8"
            maxLength="15"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" // Uppercase, lowercase and number
            required />
          <button type="submit">Create user</button>
        </form>
      </div>
    )
  }

}

export default SignUp
