import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { CarTool } from './components/CarTool'

// CSS
import Bootstrap from 'bootstrap-loader'

// Data
import SampleData from './data/sample'

class App extends React.Component {
  render() {
    return (
      <CarTool cars={this.props.cars}/>
    )
  }
}

ReactDOM.render(
  <App cars={SampleData.cars} />,
  document.querySelector('main')
);
