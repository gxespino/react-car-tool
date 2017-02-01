import React from 'react'

// Components
import { TableRow } from './TableRow'

// Utilities
import { capitalize } from '../../helpers'

export const Table = (props) => {
  const tableHeaders = () => {
    return (
      <thead>
        <tr>
          {
            props.headers.map(header =>
              <th key={header}>
                <h4>{capitalize(header)}</h4>
              </th>
            )
          }
        </tr>
      </thead>
    )
  }

  const tableBody = () => {
    return (
      <tbody>
        {
          props.items.map(item =>
            <TableRow
              key={item.make}
              item={item}
              headers={props.headers}
              deleteItem={props.deleteItem}
              updateItem={props.updateItem}
            />
          )
        }
      </tbody>
    )
  }

  return (
    <div className="col-md-6">
      <table className="table table-striped">
        {tableHeaders()}
        {tableBody()}
      </table>
    </div>
  )
}
