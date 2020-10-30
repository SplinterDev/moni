import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <nav>
      <Link to={'/test'}>Test</Link>
    </nav>
  )
}

export default Sidenav
