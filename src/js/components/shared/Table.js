import React from 'react'

// Components
import { TableRow } from './TableRow'

// Utilities
import { capitalize } from '../../helpers'

export class Table extends React.Component {
  tableHeaders = () => {
    return (
      <thead>
        <tr>
          {
            this.props.headers.map(header =>
              <th key={header}>
                <h4>{capitalize(header)}</h4>
              </th>
            )
          }
        </tr>
      </thead>
    )
  }

  tableBody = () => {
    return (
      <tbody>
        {
          this.props.items.map(item =>
            <TableRow
              key={item.make}
              item={item}
              headers={this.props.headers}
              deleteItem={this.props.deleteItem}
              updateItem={this.props.updateItem}
            />
          )
        }
      </tbody>
    )
  }

  render() {
    return (
      <div className="col-md-6">
        <table className="table table-striped">
          {this.tableHeaders()}
          {this.tableBody()}
        </table>
      </div>
    )
  }
}
