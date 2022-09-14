import { useState } from 'react'
import './_map.scss'

export function Map() {
  const [disable, setDisable] = useState('disable')
  return (
    <>
      <div className='map-navigation'>
        <div className='map-navigation__container'>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--earth ${!disable}`}>
            <h2 className='map-navigation__divPlanet--titleOne'>Por que</h2>
            <img src='../../assets/Earth-map.png' alt=''></img>
            <h2 className='map-navigation__divPlanet--titleTwo'>estou aqui?</h2>
          </div>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--moon ${disable}`}>
            <h2 className='map-navigation__divPlanet--titleOne'>A estrutura</h2>
            <img src='../../assets/Moon-map.png' alt=''></img>
            <h2 className='map-navigation__divPlanet--titleTwo'>
              da comunicação
            </h2>
          </div>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--jupter ${disable}`}>
            <img src='../../assets/Jupter-map.png' alt=''></img>
            <h2 className='map-navigation__divPlanet--titleOne'>
              Comunicação Escrita
            </h2>
          </div>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--mars disable ${disable}`}>
            <h2 className='map-navigation__divPlanet--titleOne'>
              Storytelling em
            </h2>
            <h2 className='map-navigation__divPlanet--titleTwo'>
              favor da Comunicação
            </h2>
            <img src='../../assets/Mars-map.png' alt=''></img>
          </div>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--uranus disable ${disable}`}>
            <img src='../../assets/Uranus-map.png' alt=''></img>
            <h2 className='map-navigation__divPlanet--titleOne'>
              Comunicação Verbal
            </h2>
            <h2 className='map-navigation__divPlanet--titleTwo'>
              e Não verbal{' '}
            </h2>
          </div>
          <div
            className={`map-navigation__divPlanet map-navigation__divPlanet--star ${disable}`}>
            <img src='' alt=''></img>
            <h2 className='map-navigation__divPlanet--titleOne'>
              Comunicação não violenta (CNV)
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
