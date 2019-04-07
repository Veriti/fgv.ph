import React from 'react'

const SvgComponent = ({ color, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 14 11" fill="none" {...props}>
    <path d="M14 5.75L7 0 0 5.75h2.72V11H6V7h2v4h3.28V5.75H14z" fill={ color ? color : "#fff" } />
  </svg>
)

export default SvgComponent
