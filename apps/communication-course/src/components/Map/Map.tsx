import styles from './map.module.scss'

export function Map() {
  return (
    <>
      <div className='map-navigation'>
        <div className='map-navigation__container'>
          <div className='map-navigation__divPlanet'>
            <img src='../../assets/Earth-map.png' alt=''></img>
            <h2>Por que estou aqui?</h2>
          </div>
          <div className='map-navigation__divPlanet'>
            <img src='../../assets/Moon-map.png' alt=''></img>
            <h2>A estrutura da comunicação</h2>
          </div>
          <div className='map-navigation__divPlanet'>
            <img src='../../assets/Jupter-map.png' alt=''></img>
            <h2>Comunicação Escrita</h2>
          </div>
          <div className='map-navigation__divPlanet'>
            <img src='../../assets/Mars-map.png' alt=''></img>
            <h2>Comunicação Verbal e Não verbal</h2>
          </div>
          <div className='map-navigation__divPlanet'>
            <img src='../../assets/Uranus-map.png' alt=''></img>
            <h2>Storytelling a favor da Comunicação</h2>
          </div>
          <div className='map-navigation__divPlanet'>
            <img src='' alt=''></img>
            <h2>Comunicação não violenta (CNV)</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
