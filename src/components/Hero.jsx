import React from 'react'

export default props => {
  return (
    <div
      className={`hero ${props.type ? props.type : ''}`}
      style={{
        background: `rgba(0, 0, 0, 0.075) url(${
          props.background
        }) center / cover no-repeat`,
      }}
    >
      <h1
        className="text--center text--uppercase animated zoomIn"
        data-text="Pentoo"
      >
        {props.title}
      </h1>
    </div>
  )
}
