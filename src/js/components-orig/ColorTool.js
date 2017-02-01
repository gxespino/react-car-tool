import React from 'react'

// Components
import { Header } from './Header'
import { ItemList } from './ItemList'
import { ColorForm } from './ColorForm'

export class ColorTool extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <div>
        <Header text="Color Tool" />
        <div className="row">
          <div className="col-md-6">
            <ItemList items={this.props.myColors} />
          </div>
          <div className="col-md-6">
            <ColorForm
              updateColorState={this.props.updateColorState}
            />
          </div>
        </div>
      </div>
    )
  }
}
