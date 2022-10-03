import Map from '../../components/Map/Map'
import Scorm from '../../scorm/Scorm'
// import Main_Video from 'libs/ui/src/lib/Video/Video'

export function Intro05() {
  Scorm.setData('cmi.core.lesson_location', '5')
  function topPage() {
    window.scrollTo(0, 0)
  }
  topPage()
  return (
    <>
      {/* <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/749682927?h=1a2314e24c'
      /> */}
      <Map
        planet01=''
        planet02=''
        planet03=''
        planet04=''
        planet05=''
        planet06=''
        planetLink01='/planet01'
        planetLink02='/planet02'
        planetLink03='/planet03'
        planetLink04='/planet04'
        planetLink05='/planet05'
        planetLink06='/planet06'
      />
    </>
  )
}

export default Intro05
