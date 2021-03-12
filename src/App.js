// import logo from './logo.svg';
import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // { name: 'Frankenstein', id: 'asc1' },
        // { name: 'Dracula', id: 'asc2' },
        // { name: 'Zombie', id: 'asc3' },
      ],
      searchMonster: '',
    };
  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ monsters: json }));
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => this.setState({ monsters: res.data }));
  }
  handleChange = (e) => {
    this.setState({ searchMonster: e.target.value }, () => {
      console.log(
        'file: App.js ~ line 36 ~ App ~ render ~ searchMonster',
        this.state.searchMonster
      );
    });
  };

  render() {
    const { monsters, searchMonster } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonster.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonster}></Cardlist>
      </div>
    );
  }
}

export default App;
