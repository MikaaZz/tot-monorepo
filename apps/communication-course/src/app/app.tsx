// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'

import { Routes, Route } from 'react-router-dom'

import Intro from '../pages/intro/Intro'
import Page01 from '../pages/page01/Page01'
import Page02 from '../pages/page02/Page02'
import Page03 from '../pages/page03/Page03'
import Page04 from '../pages/page04/Page04'

export function App() {
  return (
    <>
      {/* <Intro />
      <Page01 />
      <Page02 />
      <Page03 /> */}
      <Page04 />
    </>
  )
}

export default App
