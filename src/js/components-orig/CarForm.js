import React from 'react'

export class CarForm extends React.Component {
  static propTypes = {
    updateCarState: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      make: '',
      model: '',
      color: '',
      year: '',
      price: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  addNewCar = () => {
    this.props.updateCarState(this.state)
    this.setState({
      make: '',
      model: '',
      color: '',
      year: '',
      price: ''
    })
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) + " "
  }

  render() {
    return (
      <form>
        <h3>Add New Car</h3>
        {
          Object.keys(this.state).map((carField, index) =>
            <div className="form-group" key={index}>
              <label htmlFor={`new-car-${carField}`} className="col-sm-2 control-label">{this.capitalize(carField)}</label>
              <input type="text" id={`new-car-${carField}`} className="form-control" name={`${carField}`}
                value={this[carField]} onChange={this.onChange} />
            </div>
          )
        }
        <button className="btn btn-primary" type="button" onClick={this.addNewCar.bind(this)}>+ Add Car</button>
      </form>
    )
  }
}
