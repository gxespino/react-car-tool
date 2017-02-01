import React from 'react'

// Components
import { Header } from 'components/shared/Header'
import { Table } from 'components/shared/Table'
import { ItemForm } from 'components/shared/ItemForm'

export class CarTool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: this.props.cars.concat(),
      carKeys: Object.keys(this.props.cars[0]),
    }
  }

  addCar = (car) => {
    this.setState({
      cars: this.state.cars.concat(car)
    })
  }

  deleteCar = (car) => {
    this.setState({
      cars: this.state.cars.filter(aCar => aCar !== car)
    })
  }

  updateCar = (oldCar, newCar) => {
    this.setState({
      cars: this.state.cars.filter(aCar => aCar !== oldCar).concat(newCar)
    })
  }

  render() {
    return (
      <div>
        <Header text="Car Tool" />
        <Table
          items={this.state.cars}
          headers={this.state.carKeys}
          deleteItem={this.deleteCar}
          updateItem={this.updateCar}
        />
        <ItemForm
          itemType="Car"
          itemFields={this.state.carKeys}
          saveItem={this.addCar}
        />
      </div>
    )
  }
}

