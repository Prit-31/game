import React from 'react'

function Button(props) {
  return (
    <div className='btn'>
        <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

export default Button