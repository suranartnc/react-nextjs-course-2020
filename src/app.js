import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'https://api.github.com/repos/facebook/react'

export default function App() {
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    axios.get(apiUrl).then(response => {
      console.log(response.data)
    })
  }

  if (loading === true) {
    return 'Loading...'
  }

  return (
    <div>
      <p>Name: ???</p>
      <p>Stars: ???</p>
      <button
        onClick={() => {
          console.log('Button Clicked')
        }}>
        Refresh
      </button>
    </div>
  )
}
