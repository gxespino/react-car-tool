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

  render() {
    return (
      <div>
        <Header text="Car Tool" />
        <div className="row">
          <Table
            items={this.state.cars}
            headers={this.state.carKeys}
          />
          <ItemForm
            itemType="Car"
            itemFields={this.state.carKeys}
            saveItem={this.addCar}
          />
        </div>
      </div>
    )
  }
}

