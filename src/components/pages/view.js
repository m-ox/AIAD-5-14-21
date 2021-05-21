import React, { Component } from 'react'

import Sticky from './sticky'

const View = (props) => {
  const stickies = props.data.map(sticky => {
    return (
      <Sticky
        content={sticky.content}
      />
    )
  })

  return (
    <div className="view-stickies">
      {stickies}
    </div>
  )
}

export default View