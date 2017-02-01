import React from 'react'

export class TableRow extends React.Component {
  render() {
    return (
      <tr>
        {
          this.props.headers.map(header =>
            <td key={`${this.props.item.make}-${header}`}>
              {this.props.item[header]}
            </td>
          )
        }
      </tr>
    )
  }
}
