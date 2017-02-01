import React from 'react'

export class ColorForm extends React.Component {
  static propTypes = {
    updateColorState: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      newColor: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  addNewColor = () => {
    this.props.updateColorState(this.state.newColor)
    this.setState({
      newColor: ''
    })
  }

  render() {
    return (
      <form>
        <h3>Add New Car</h3>
        <div className="form-group">
          <label htmlFor="new-color-input" className="col-sm-2 control-label">New Color</label>
          <input
            className="form-control"
            type="text"
            id="new-color-input"
            name="newColor"
            value={this.state.newColor}
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={this.addNewColor.bind(this)}>+ Add Color</button>
      </form>
    )
  }
}


