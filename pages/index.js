import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link
          href="/repository/[organization]/[name]"
          as="/repository/facebook/react">
          React
        </Link>
      </li>
      <li>
        <Link
          href="/repository/[organization]/[name]"
          as="/repository/zeit/next.js">
          Next.js
        </Link>
      </li>
    </ul>
  )
}
