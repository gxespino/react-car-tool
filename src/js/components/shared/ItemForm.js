import React from 'react'

// Utilities
import { capitalize } from '../../helpers'

export class ItemForm extends React.Component {
  constructor() {
    super()

    this.state = {
      item: {}
    }
  }

  onChange = (e) => {
    const item = this.state.item
    item[e.currentTarget.name] = e.currentTarget.value

    this.setState({item})
  }

  addItem = () => {
    this.props.saveItem(this.state.item)
  }

  inputs() {
    return (
      <div>
        {
          this.props.itemFields.map(field =>
            <div key={`new-item-${field}`} className="form-group">
              <label htmlFor={`new-item-${field}`} className="col-sm-2 control-label">
                {capitalize(field)}
              </label>
              <input
                type="text"
                className="form-control"
                id={`new-item-${field}`}
                name={field}
                value={this.state.item[field]}
                onChange={this.onChange}
              />
            </div>
          )
        }
      </div>
    )
  }

  button() {
    return (
      <button
        className="btn btn-primary"
        type="button"
        onClick={this.addItem}
      >
        Add {this.props.itemType}
      </button>
    )
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          {this.inputs()}
          {this.button()}
        </form>
      </div>
    )
  }
}
