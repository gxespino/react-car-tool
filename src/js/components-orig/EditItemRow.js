import React from 'react'

export class EditItemRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item
    }
  }

  render() {
    return (
      <div>
        <td>
          <button className="btn btn-primary" type="button" onClick={() => this.props.saveRow(this.state.item)}>Save Row</button>
        </td>
        <td>
          <button className="btn btn-primary" type="button" onClick={this.props.cancelRow(this.state.item)}>Cancel Row</button>
        </td>
      </div>
    )
  }
}
