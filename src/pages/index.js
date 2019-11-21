import React from 'react'
import withPage from '@lib/page/withPage'

function HomePage() {
  return (
    <div>
      <p>This is homepage</p>
    </div>
  )
}

export default withPage()(HomePage)
