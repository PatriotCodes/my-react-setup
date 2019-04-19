import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './App.module.scss';
import classNames from 'classnames';

class App extends Component {
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
        </header>
      </div>
    );
  }
}

export default App;
