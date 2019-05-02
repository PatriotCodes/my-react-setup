import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import styles from './App.module.scss'
import classNames from 'classnames'

import { observable, computed, action } from 'mobx'
import { observer }  from 'mobx-react'

@observer
class App extends Component {

  @observable counter = 0;

  @action.bound onIncrement(amount) {
    this.counter += amount;
  }

  onDecrement = () => {
    this.counter--;
  }

  @computed get counterFormat() {
    return `${this.counter}$`
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={classNames({[styles.header]: true}, {[styles.blackBg]: true})}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Mobx example:
          </p>
          <div className={styles.mobxExample}>
            {this.counterFormat}
            <button onClick={() => this.onIncrement(10)} type="button">Increment by 10</button>
            <button onClick={this.onDecrement} type="button">Decrement</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App
