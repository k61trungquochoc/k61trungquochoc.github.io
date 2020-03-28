import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import List from './components/List';
import fakeData from './components/fakeData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    };
  }

  onChoose = (selected) => {
    this.setState({ selected })
  }

  setNumber = (id, number) => {
    this.setState(({ data }) => {
      let newData = data.map(item => {
        if (item.id === id) item.number = number;
        return item;
      })
      return { data: newData }
    })
  }

  render() {
    const { data, selected } = this.state;
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1"><img src={logo} className="App-logo" alt="logo" />K61 Trung Quốc học</span>
        </nav>
        <div className="content pt-3 pb-3">
          <div className="row" style={{ height: '100%' }}>
            <div className="col-4" style={{ height: '100%' }}>
              <List data={data} onChoose={this.onChoose} />
            </div>
            <div className="col-8" style={{ height: '100%' }}>
              <Random selected={selected} setNumber={this.setNumber} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
