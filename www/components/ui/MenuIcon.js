import React from 'react'

const SvgComponent = props => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 22.5h22.5V20H3.75v2.5zm0-6.25h22.5v-2.5H3.75v2.5zm0-8.75V10h22.5V7.5H3.75z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
