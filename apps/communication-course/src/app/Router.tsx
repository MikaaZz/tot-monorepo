import { Route, Routes } from 'react-router-dom'

import Intro from '../pages/intro/Intro'
import Page01 from '../pages/page01/Page01'
import Page02 from '../pages/page02/Page02'
import Page03 from '../pages/page03/Page03'
import Page04 from '../pages/page04/Page04'
import Page05 from '../pages/page05/Page05'
import Page06 from '../pages/page06/Page06'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/planet01' element={<Page01 />} />
      <Route path='/planet02' element={<Page02 />} />
      <Route path='/planet03' element={<Page03 />} />
      <Route path='/planet04' element={<Page04 />} />
      <Route path='/planet05' element={<Page05 />} />
      <Route path='/planet06' element={<Page06 />} />
    </Routes>
  )
}
