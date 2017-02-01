import React from 'react'

// Components
import { TableRow } from './TableRow'

export class Table extends React.Component {
  tableHeaders() {
    return (
      <thead>
        <tr>
          {
            this.props.headers.map(header =>
              <th key={header}>
                <h3>{header}</h3>
              </th>
            )
          }
        </tr>
      </thead>
    )
  }

  tableBody() {
    return (
      <tbody>
        {
          this.props.items.map(item =>
            <TableRow
              key={item.make}
              item={item}
              headers={this.props.headers}
            />
          )
        }
      </tbody>
    )
  }

  render() {
    return (
      <div>
        <table>
          {this.tableHeaders()}
          {this.tableBody()}
        </table>
      </div>
    )
  }
}
