import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <p>
  When controlling the flow of text, using the CSS property <span class="inline">display: inline</span> will cause the
  text inside the element to wrap normally.
</p>
<p>
  While using the property <span class="inline-block">display: inline-block</span> will wrap the element to prevent the
  text inside from extending beyond its parent.
</p>
<p>
  Lastly, using the property <span class="block">display: block</span> will put the element on its own line and fill its
  parent.
</p>
    </>
  )
}

export default App
