import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('authStore')
@observer
class Login extends Component {

  componentWillUnmount() {
    this.props.authStore.reset()
  }

  handleEmailChange = e => this.props.authStore.setEmail(e.target.value)
  handlePasswordChange = e => this.props.authStore.setPassword(e.target.value)
  handleSubmitForm = (e) => {
    e.preventDefault()
    this.props.authStore.login()
      .then(() => console.log('login'))
  };

  render() {
    const { values, inProgress } = this.props.authStore

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div>
              <h1>Sign In</h1>

              <form onSubmit={this.handleSubmitForm}>
                <fieldset>

                  <input
                    type="text"
                    placeholder="Login"
                    value={values.email}
                    onChange={this.handleEmailChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={this.handlePasswordChange}
                  />

                  <button
                    type="submit"
                    disabled={inProgress}
                  >
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Login
