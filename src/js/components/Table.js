import React from 'react'

export class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headers: Object.keys(this.props.items[0])
    }
  }

  tableHeaders() {
    return (
      <thead>
        <tr>
          {
            this.state.headers.map(header =>
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
                this.state.headers.map(header =>
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
