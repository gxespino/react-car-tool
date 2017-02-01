import React from 'react'

export class ViewItemRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item
    }
  }

  render() {
    return (
      <div>
        <td>{this.props.item}</td>
        <td>
          <button className="btn btn-primary" type="button" onClick={() => this.props.editRow(this.state.item)}>Edit Row</button>
        </td>
        <td>
          <button className="btn btn-primary" type="button" onClick={this.props.deleteRow(this.state.item)}>Delete Row</button>
        </td>
      </div>
    )
  }
}
