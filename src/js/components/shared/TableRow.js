import React from 'react'

export class TableRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false,
      item: this.props.item,
      newItem: {},
    }
  }

  setEditable = (toggle) => {
    this.setState({
      editable: toggle
    })
  }

  updateItem = () => {
    this.props.updateItem(this.state.item, this.state.newItem);

    this.setState({newItem: {}});
    this.setEditable(false);
  }

  onChange = (e) => {
    const newItem = this.state.newItem
    newItem[e.currentTarget.name] = e.currentTarget.value

    this.setState({newItem})
  }

  viewRow() {
    return (
      <tr>
        {
          this.props.headers.map(header =>
            <td key={`${this.props.item.make}-${header}`}>
              {this.props.item[header]}
            </td>
          )
        }
        <td>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.setEditable(true)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => this.props.deleteItem(this.props.item)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  editRow() {
    return (
      <tr>
        {
          this.props.headers.map(header =>
            <td key={`${this.props.item.make}-${header}`}>
              <input 
                id={`item-${header}`}
                name={header}
                value={this.state[header]} 
                onChange={this.onChange}
              />
            </td>
          )
        }
        <td>
          <button
            className="btn btn-success"
            type="button"
            onClick={this.updateItem}
          >
            Save
          </button>
        </td>
        <td>
          <button
            className="btn btn-default"
            type="button"
            onClick={() => this.setEditable(false)}
          >
            Cancel
          </button>
        </td>
      </tr>
    )
  }

  renderRow() {
    if (this.state.editable) {
      return this.editRow()
    } else {
      return this.viewRow()
    }
  }

  render() {
    return this.renderRow()
  }
}
