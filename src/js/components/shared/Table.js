import React from 'react'

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
            <tr key={item.make}>
              {
                this.props.headers.map(header =>
                  <td key={`${item.make}-${header}`}>
                    {item[header]}
                  </td>
                )
              }
            </tr>
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
