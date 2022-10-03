import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './_map.scss'

interface mapsDisable {
  planet01: string
  planet02: string
  planet03: string
  planet04: string
  planet05: string
  planet06: string

  planetLink01: string
  planetLink02: string
  planetLink03: string
  planetLink04: string
  planetLink05: string
  planetLink06: string
}

const Map = (props: mapsDisable) => {
  return (
    <div className='map-navigation'>
      <div className='map-navigation__container'>
        <Link
          to={props.planetLink01}
          className={`map-navigation__divPlanet map-navigation__divPlanet--earth`}>
          <h2 className='map-navigation__divPlanet--titleOne'>Por que</h2>
          <img src='../../assets/Earth-map.png' alt=''></img>
          <h2 className='map-navigation__divPlanet--titleTwo'>estou aqui?</h2>
        </Link>
        <Link
          to={props.planetLink02}
          className={`map-navigation__divPlanet map-navigation__divPlanet--moon ${props.planet02}`}>
          <h2 className='map-navigation__divPlanet--titleOne'>A estrutura</h2>
          <img src='../../assets/Moon-map.png' alt=''></img>
          <h2 className='map-navigation__divPlanet--titleTwo'>
            da comunicação
          </h2>
        </Link>
        <Link
          to={props.planetLink03}
          className={`map-navigation__divPlanet map-navigation__divPlanet--jupter ${props.planet03}`}>
          <img src='../../assets/Jupter-map.png' alt=''></img>
          <h2 className='map-navigation__divPlanet--titleOne'>
            Comunicação Escrita
          </h2>
        </Link>
        <Link
          to={props.planetLink04}
          className={`map-navigation__divPlanet map-navigation__divPlanet--mars ${props.planet04}`}>
          <h2 className='map-navigation__divPlanet--titleOne'>
            Storytelling em
          </h2>
          <h2 className='map-navigation__divPlanet--titleTwo'>
            favor da Comunicação
          </h2>
          <img src='../../assets/Mars-map.png' alt=''></img>
        </Link>
        <Link
          to={props.planetLink05}
          className={`map-navigation__divPlanet map-navigation__divPlanet--uranus ${props.planet05}`}>
          <img src='../../assets/Uranus-map.png' alt=''></img>
          <h2 className='map-navigation__divPlanet--titleOne'>
            Comunicação Verbal
          </h2>
          <h2 className='map-navigation__divPlanet--titleTwo'>e Não verbal</h2>
        </Link>
        <Link
          to={props.planetLink06}
          className={`map-navigation__divPlanet map-navigation__divPlanet--star ${props.planet06}`}>
          <img src='../../assets/Start-map.png' alt=''></img>
          <h2 className='map-navigation__divPlanet--titleOne'>
            Comunicação não violenta (CNV)
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default Map
