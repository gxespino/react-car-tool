import React from 'react'

export class ViewCarRow extends React.Component {
  render() {
    return (
      <td>
        {this.props.carProp}
      </td>
    )
  }
}
