import React from 'react'

// Components
import { Header } from './Header'
import { CarForm } from './CarForm'
import { ViewCarRow } from './ViewCarRow'

export class CarTool extends React.Component {
  constructor() {
    super()

    this.state = {
      myCars: {}
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      myCars: props.myCars
    })
  }

  header() {
    return (
      <Header text="Car Tool" />
    )
  }

  tableHead() {
    return (
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
    )
  }

  deleteCar = (e, carIndex) => {
    this.props.deleteFromCarState(carIndex)
    // this.props.removeFromCarState(this.props.car.id)
  }

  tableBody(deleteCar, myCars) {
    return (
      <tbody>
        {
          myCars.map((car, index) =>
            <tr key={index}>
              {
                Object.keys(car).slice(1).map((carProp, carPropIndex) =>
                  <ViewCarRow
                    key={carPropIndex}
                    carProp={car[carProp]}
                    carPropIndex={carPropIndex}
                  />
                )
              }
              <td>
                <button className="btn btn-primary" type="button" onClick={this.deleteCar.bind(this, index)}>Delete Car</button>
              </td>

            </tr>
          )
        }
      </tbody>
    )
  }

  render() {
    return (
      <div>
        {this.header()}
        <div className="row">
          <div className="col-md-6">
            <table className="table table-striped">
              {this.tableHead()}
              {this.tableBody(this.deleteCar, this.state.myCars)}
            </table>
          </div>
          <div className="col-md-6">
            <CarForm
              updateCarState={this.props.updateCarState}
            />
          </div>
        </div>
      </div>
    )
  }
}


