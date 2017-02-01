import React from 'react'

export class Header extends React.Component {
  render() {
    return (
      <h1 style={{marginBottom: "50px", padding: "35px 0px 35px 0", borderBottom: "1px solid grey"}}>
        <center>{this.props.text}</center>
      </h1>
    )
  }
}
