import { Route, Routes, useNavigate } from 'react-router-dom'

// PAGES
import Intro from '../pages/intro/Intro'
import Intro01 from '../pages/intro/Intro01'
import Intro02 from '../pages/intro/Intro02'
import Intro03 from '../pages/intro/Intro03'
import Intro04 from '../pages/intro/Intro04'
import Intro05 from '../pages/intro/Intro05'
import Page01 from '../pages/page01/Page01'
import Page02 from '../pages/page02/Page02'
import Page03 from '../pages/page03/Page03'
import Page04 from '../pages/page04/Page04'
import Page05 from '../pages/page05/Page05'
import Page06 from '../pages/page06/Page06'

// DEPENDENCIES MODULES
import Scorm from '../scorm/Scorm'

export function Router() {
  Scorm.init()
  const navigate = useNavigate()

  const pageData = { actualyPage: Scorm.getData('cmi.core.lesson_location') }

  if (pageData.actualyPage === '1') {
    navigate('/intro01')
  }
  if (pageData.actualyPage === '2') {
    navigate('/intro02')
  }
  if (pageData.actualyPage === '3') {
    navigate('/intro03')
  }
  if (pageData.actualyPage === '4') {
    navigate('/intro04')
  }
  if (pageData.actualyPage === '5') {
    navigate('/intro05')
  }

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/intro01' element={<Intro01 />} />
      <Route path='/intro02' element={<Intro02 />} />
      <Route path='/intro03' element={<Intro03 />} />
      <Route path='/intro04' element={<Intro04 />} />
      <Route path='/intro05' element={<Intro05 />} />
      <Route path='/planet01' element={<Page01 />} />
      <Route path='/planet02' element={<Page02 />} />
      <Route path='/planet03' element={<Page03 />} />
      <Route path='/planet04' element={<Page04 />} />
      <Route path='/planet05' element={<Page05 />} />
      <Route path='/planet06' element={<Page06 />} />
    </Routes>
  )
}
