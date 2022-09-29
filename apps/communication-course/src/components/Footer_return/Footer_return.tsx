import Button from 'libs/ui/src/lib/Button/Button'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spaceship from '../Spaceship'
import './_Footer_return.scss'

interface navigationFooter {
  navPage: string
}

const Footer_return = (props: navigationFooter) => {
  const [spaceShipFly, setSpaceShipFly] = useState('')
  const navigate = useNavigate()
  return (
    <div className={`main-footer ${spaceShipFly}`}>
      <Spaceship />
      <Button
        interaction={() => {
          setSpaceShipFly('animationSapceship')
          if (window.innerWidth > 1024) {
            setTimeout(() => {
              navigate(props.navPage)
            }, 2000)
            return
          }
          setTimeout(() => {
            navigate(props.navPage)
          }, 6000)
        }}
        text={'Continuar explorando'}
      />
    </div>
  )
}

export default Footer_return
