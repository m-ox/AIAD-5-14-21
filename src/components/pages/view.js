import React, { Component } from 'react'
import axios from 'axios'

import Sticky from './sticky'

const View = (props) => {
  return (
    <div className="view-stickies">
      <Sticky />
    </div>
  )
}

export default View