// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'

import { Routes, Route } from 'react-router-dom'

import Intro from '../pages/intro/Intro'
import Page01 from '../pages/page01/Page01'
import Page02 from '../pages/page02/Page02'

export function App() {
  return (
    <>
      {/* <Intro />
      <Page01 /> */}
      <Page02 />
    </>
  )
}

export default App
