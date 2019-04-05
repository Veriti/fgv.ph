import React from 'react'

const SvgComponent = ({ color, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.384 4H3.616C1.602 4 0 5.817 0 7.985v16.03C0 26.183 1.602 28 3.616 28h24.768C30.398 28 32 26.183 32 24.015V7.985C32 5.817 30.398 4 28.384 4zM5.36 7.39H26.64L16 14.043 5.361 7.39zM3.616 24.61c-.256 0-.512-.243-.512-.595V9.922l12.1 7.572c.232.168.486.258.796.258.31 0 .564-.09.797-.258l12.099-7.572v14.093c0 .352-.256.595-.512.595H3.616z"
      fill={color ? color : "#000"}
    />
  </svg>
)

export default SvgComponent
