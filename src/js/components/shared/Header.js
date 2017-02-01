import React from 'react'

export const Header = (props) => {
  return (
    <h1 style={{marginBottom: "50px", padding: "35px 0px 35px 0", borderBottom: "1px solid grey"}}>
      <center>{props.text}</center>
    </h1>
  )
}
