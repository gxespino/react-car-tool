import React from 'react'

export class ItemForm extends React.Component {
  constructor() {
    super()

    this.state = {
      item: {}
    }
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1) + " "
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
                {this.capitalize(field)}
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
      <div>
        <form>
          {this.inputs()}
          {this.button()}
        </form>
      </div>
    )
  }
}
