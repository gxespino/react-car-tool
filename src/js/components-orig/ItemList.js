import React from 'react'

// Components
import { ViewItemRow } from './ViewItemRow'
import { EditItemRow } from './ViewItemRow'

export class ItemList extends React.Component {
  static propTypes = {
    items: React.PropTypes.array
  }

  constructor(props) {
    super(props)

    this.state = {
      editItem: ''
    }

    // this.saveRow = this.saveRow.bind(this)
    // this.cancelRow = this.cancelRow.bind(this)
    // this.editRow = this.editRow.bind(this)
    // this.deleteRow = this.deleteRow.bind(this)
  }

  editRow = (item) => {
    this.setState({
      editItem: item
    })
    console.log(this.state.editItem)
  }

  deleteRow = (item) => {
  }

  saveRow = (item) => {
  }

  cancelRow = (item) => {
  }

  render() {
    return (
      <table className="table table-striped">
      <tbody>
        {
          this.props.items.map((item, index) =>

            <tr key={index}>
              {
                this.state.editItem === item
                ? <EditItemRow item={item} saveRow={this.saveRow} cancelRow={this.cancelRow} />
                : <ViewItemRow item={item} editRow={this.editRow} deleteRow={this.deleteRow} />
              }
            </tr>
          )
        }
      </tbody>
      </table>
    )
  }
}
