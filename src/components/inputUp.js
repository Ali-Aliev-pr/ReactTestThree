import { Component } from 'react';
// import './App.css';

export default class Up extends Component {
    render() {
        return (
            <div>
                <h1>Генератор паролей</h1>
                <form className="form">
                    <input className="input" type="password"></input>
                    <button>Сгенерировать</button>
                </form>
            </div>
        )
    }
}