import { Component } from 'react';
import './App.css';
import Up from './components/inputUp';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Up />
      </div>
    )
  }
}