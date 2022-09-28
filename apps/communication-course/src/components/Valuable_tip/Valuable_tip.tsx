import { useState } from 'react'
import Spaceship from '../Spaceship'
import './_valuable_tip.scss'

const Valueable_tip = () => {
  const [spaceShipFly, setSpaceShipFly] = useState('')
  const [displayHidden, setDisplayHidden] = useState('')

  return (
    <div
      className={`valuable-tip ${spaceShipFly}`}
      onClick={() => {
        setSpaceShipFly('sapceShipAnimation')
        setDisplayHidden('containerAnimation')
      }}>
      <Spaceship />
      <div className={`valuable-tip__infoContainer ${displayHidden}`}>
        <h3 className='valuable-tip__infoContainer--title'>Dica valiosa:</h3>
        <p className='valuable-tip__infoContainer--text'>
          Todos nós temos habilidades a serem desenvolvidas e melhoradas. E a
          oratória, é uma das mais importantes, sem sombra de dúvidas. O medo de
          falar em público, aquele suador, tremedeira, borboletas no estômago,
          como trabalhar esta habilidade? Como saber me expressar melhor e de
          maneira clara? Trouxe para você uma sugestão supervaliosa de podcast
          sobre o tema:
        </p>
        <div className='valuable-tip__infoContainer--iframe'>
          <iframe
            style={{ borderRadius: '12px' }}
            src='https://open.spotify.com/embed/episode/5N1qVkVMxPhiGD2GcYLCt5?utm_source=generator'
            width='100%'
            height='352'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Valueable_tip
