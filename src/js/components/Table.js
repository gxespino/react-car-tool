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
              <th><h3>{header}</h3></th>
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
          this.state.headers.map(header =>
            {
              this.props.items.map((item, header) =>
                <tr>
                  <td key={item}>
                    {item['make']}
                  </td>
                </tr>
              )
            }
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
