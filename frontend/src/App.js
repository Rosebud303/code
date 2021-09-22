import React, { Component } from 'react'
import Container from './Container';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reports: []
    }
  }

  resolveReport = (id) => {
    fetch(`http://localhost:8080/reports/${id}`, {
      method: 'PUT'
    })
        .then(response => response.json())
        .then(data => {
          let filteredReports = this.state.reports.filter(report => {
            return report.id !== id
          })
          this.setState({reports: filteredReports})
        });
  }

  blockReport = (id) => {
    fetch(`http://localhost:8080/reports/block/${id}`, {
      method: 'PUT'
    })
        .then(response => response.json())
        .then(data => {
         let clonedData = [...this.state.reports]
         clonedData.forEach(report => {
            if(report.id === id) {
              report.blocked = data.blockState
            } 
        }); 
        this.setState({reports: clonedData})
        console.log(clonedData)
    })
  }

  componentDidMount() {
    fetch('http://localhost:8080/reports')
      .then(response => response.json())
      .then(data => this.setState({reports: data}));
  }

  render() {
    return (
      <div className='app'>
        <Container 
          reports={this.state.reports}
          resolveReport={this.resolveReport}
          blockReport={this.blockReport}
        />
      </div>
    )
  }
}


export default App;