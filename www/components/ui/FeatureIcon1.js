import React from 'react'

const SvgComponent = props => (
  <svg width={44} height={45} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 4.5c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18zm-22 18C0 10.35 9.85.5 22 .5s22 9.85 22 22-9.85 22-22 22-22-9.85-22-22z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.536 14a6 6 0 0 0-6 6v5A4 4 0 0 1 15 27h13.072a4 4 0 0 1-.536-2v-5a6 6 0 0 0-6-6zm-2.232 16.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 0 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367z"
      fill="#fff"
    />
    <path d="M23.536 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="#fff" />
  </svg>
)

export default SvgComponent
