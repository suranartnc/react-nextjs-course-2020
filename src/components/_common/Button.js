import React from 'react'
import colors from '@features/_ui/colors'

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      css={{
        background: colors.primary,
        border: 'none',
        borderRadius: '20px',
        minWidth: '130px',
        minHeight: '36px',
        color: colors.link,
        fontSize: '0.8em',
        cursor: 'pointer',
      }}>
      {children}
    </button>
  )
}
