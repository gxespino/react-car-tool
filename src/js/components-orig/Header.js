import React from 'react'

export class Header extends React.Component {
  render() {
    return (
      <header style={{
        borderBottom: "thin dotted black",
        marginBottom: "25px"
      }}>
        <h1>{this.props.text}</h1>
      </header>
    )
  }
}
