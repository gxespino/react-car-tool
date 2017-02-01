import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'

// CSS
import Bootstrap from 'bootstrap-loader'

// Data
import sampleData from './data/sample'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      myColors: [],
      myCars: {},
    }
  }

  componentDidMount() {
    // Promise API
    fetch('http://localhost:5000/cars')
      .then(res => res.json())
      .then(cars => {

        this.setState({
          myColors: this.props.myColors,
          myCars: cars
        })

      })
  }

  updateCarState = (newCar) => {
    this.setState({
      myCars: this.state.myCars.concat(newCar)
    })
  }

  updateColorState = (newColor) => {
    this.setState({
      myColors: this.state.myColors.concat(newColor)
    })
  }

  deleteFromCarState = (carIndex) => {
    this.setState({
      myCars: this.state.myCars.slice(carIndex, 0)
    })
  }

  render() {
    return (
      <div>
        <ColorTool
          myColors={this.state.myColors}
          updateColorState={this.updateColorState}
        />
        <CarTool
          myCars={this.state.myCars}
          updateCarState={this.updateCarState}
          deleteFromCarState={this.deleteFromCarState}
        />
      </div>
    )
  }
}

class ColorToolContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myCars: []
    }
  }

  
  render() {
    return(
      <App
        myColors={this.props.myColors}
        myCars={this.state.myCars}
      />
    )
  }
}

ReactDOM.render(
  <App
    myColors={sampleData.colors}
  />,
  document.querySelector('main')
);



