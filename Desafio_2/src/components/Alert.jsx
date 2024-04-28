import React from 'react'
export default function Alert(props) {
  return (
    <div>
      <div className={"props.validado"}>
        <h4>{props.mensaje}</h4>
      </div>
    </div>
  )
}
