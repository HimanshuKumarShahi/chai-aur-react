import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const Reactelement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     Children:'click me to visit google'
// }

const anotheruser="chai aur React"
const NewElement=(
  <a href="https://www.google.com" target='_blank'>Visit Here</a>
)

const ReactElement=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  "click Here to visit Google"
)

createRoot(document.getElementById('root')).render(
    ReactElement
)
