import React from 'react'

const SvgComponent = ({ color, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
    <path
      d="M21.9 27h-.3c-3.2-.4-6.4-1.5-9.1-3.2-2.5-1.6-4.7-3.8-6.3-6.3-1.8-2.7-2.9-5.9-3.2-9.1 0-.8.2-1.6.7-2.2.5-.6 1.2-1 2-1.1H9c1.5 0 2.8 1.1 3 2.6.1.9.3 1.8.6 2.6.4 1.1.1 2.3-.7 3.2l-.7.7c1.2 1.8 2.7 3.4 4.6 4.6l.7-.7c.8-.8 2.1-1.1 3.2-.7.8.3 1.7.5 2.6.6 1.5.2 2.6 1.5 2.6 3v3c0 .8-.3 1.6-.9 2.1-.6.5-1.3.9-2.1.9zM9 7.1H6c-.3 0-.6.2-.8.4-.1.2-.2.4-.2.7.3 2.9 1.3 5.7 2.9 8.2 1.5 2.3 3.4 4.3 5.7 5.7 2.5 1.6 5.3 2.6 8.2 2.9.4 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-3c0-.5-.4-.9-.9-1-1-.1-2-.4-3-.8-.4-.1-.8-.1-1.1.2l-1.3 1.3c-.3.3-.8.4-1.2.2-2.7-1.5-4.9-3.7-6.4-6.4-.1-.4 0-.9.3-1.2l1.3-1.3c.2-.2.3-.7.2-1-.4-1-.6-2-.8-3 0-.5-.5-.9-1-.9zm11.9 7c-.5 0-.9-.3-1-.8-.3-1.6-1.6-2.8-3.2-3.2-.5-.1-.9-.6-.8-1.2.1-.5.6-.9 1.2-.8 2.4.5 4.3 2.3 4.7 4.7.1.5-.2 1.1-.8 1.2 0 0 0 .1-.1.1zm4-.1c-.5 0-.9-.4-1-.9-.4-3.7-3.3-6.6-7.1-7.1-.5-.1-.9-.6-.9-1.1 0-.5.6-.9 1.1-.9 4.7.5 8.3 4.1 8.8 8.8.1.5-.3 1-.9 1.1.1.1 0 .1 0 .1z"
      fill={ color || "#fff" }
    />
  </svg>
)

export default SvgComponent
