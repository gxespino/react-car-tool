import React from 'react'

export class Table extends React.Component {
  itemsTable() {
    return (
      this.props.items.map(item =>
        <ul>
          <li><h3>{item.make}</h3></li>
        </ul>
      )
    )
  }

  render() {
    return (
      <div>
        {this.itemsTable()}
      </div>
    )
  }
}
