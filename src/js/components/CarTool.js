import React from 'react'

// Components
import { Table } from 'components/Table'

export class CarTool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: this.props.cars.concat(),
    }
  }

  render() {
    return (
      <div>
        <h1>CAR TOOL</h1>

        <Table items={this.state.cars} />
      </div>
    )
  }
}

