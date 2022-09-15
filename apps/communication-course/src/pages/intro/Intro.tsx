import './_intro.scss'
import Map from '../../components/Map/Map'
import Main_Video from 'libs/ui/src/lib/Video/Video'

export function Intro() {
  return (
    <>
      <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/749682927?h=1a2314e24c'
        heigth={'100vh'}
        width={'100vw'}
      />
      <Map />
    </>
  )
}

export default Intro
