import Button from 'libs/ui/src/lib/Button/Button'
import path from 'path'
import { useState } from 'react'
import Spaceship from '../Spaceship'
import './_Footer_return.scss'

const Footer_return = () => {
  const [spaceShipFly, setSpaceShipFly] = useState('')

  return (
    <div className={`main-footer ${spaceShipFly}`}>
      <Spaceship />
      <div
        onClick={() => {
          setSpaceShipFly('animationSapceship')
          setTimeout(() => {}, 6000)
        }}>
        <Button text={'Continuar explorando'} />
      </div>
    </div>
  )
}

export default Footer_return
