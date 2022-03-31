import React from 'react'

export default function Spacer({h = 16, style}) {
  return (
    <div style={{paddingTop: `${h}px`, ...style }}></div>
  )
}
