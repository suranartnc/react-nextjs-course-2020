import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link
          href="/repository/[organization]/[name]"
          as="/repository/facebook/react">
          <a>React</a>
        </Link>
      </li>
      <li>
        <Link
          href="/repository/[organization]/[name]"
          as="/repository/zeit/next.js">
          <a>Next.js</a>
        </Link>
      </li>
    </ul>
  )
}
