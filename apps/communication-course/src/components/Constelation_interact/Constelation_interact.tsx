import './_constelation_interact.scss'

import Star01 from '../../pages/page02/assets/star01'
import Star02 from '../../pages/page02/assets/star02'
import Star03 from '../../pages/page02/assets/star03'
import Star04 from '../../pages/page02/assets/star04'
import Star05 from '../../pages/page02/assets/star05'
import { useRef, useState } from 'react'

const Constelation_interact = () => {
  // POP UP 01
  const [displayContent, setDisplayContent] = useState('starClickedDisplay')
  const [opacityContent, setOpacityContent] = useState('starClickedOpacity')

  // POP UP 02
  const [displayContent02, setDisplayContent02] = useState('starClickedDisplay')
  const [opacityContent02, setOpacityContent02] = useState('starClickedOpacity')

  // POP UP 03
  const [displayContent03, setDisplayContent03] = useState('starClickedDisplay')
  const [opacityContent03, setOpacityContent03] = useState('starClickedOpacity')

  // POP UP 04
  const [displayContent04, setDisplayContent04] = useState('starClickedDisplay')
  const [opacityContent04, setOpacityContent04] = useState('starClickedOpacity')

  // POP UP 05
  const [displayContent05, setDisplayContent05] = useState('starClickedDisplay')
  const [opacityContent05, setOpacityContent05] = useState('starClickedOpacity')

  function togglePopUp(popUpNumber: number) {
    console.log('teste')

    if (popUpNumber === 1) {
      setDisplayContent('')
      setTimeout(() => {
        setOpacityContent('')
      }, 100)

      setDisplayContent02('starClickedDisplay')
      setOpacityContent02('starClickedOpacity')

      setDisplayContent03('starClickedDisplay')
      setOpacityContent03('starClickedOpacity')

      setDisplayContent04('starClickedDisplay')
      setOpacityContent04('starClickedOpacity')

      setDisplayContent05('starClickedDisplay')
      setOpacityContent05('starClickedOpacity')
    }

    if (popUpNumber === 2) {
      setDisplayContent('starClickedDisplay')
      setOpacityContent('starClickedOpacity')

      setDisplayContent02('')
      setTimeout(() => {
        setOpacityContent02('')
      }, 100)

      setDisplayContent03('starClickedDisplay')
      setOpacityContent03('starClickedOpacity')

      setDisplayContent04('starClickedDisplay')
      setOpacityContent04('starClickedOpacity')

      setDisplayContent05('starClickedDisplay')
      setOpacityContent05('starClickedOpacity')
    }

    if (popUpNumber === 3) {
      setDisplayContent('starClickedDisplay')
      setOpacityContent('starClickedOpacity')

      setDisplayContent02('starClickedDisplay')
      setOpacityContent02('starClickedOpacity')

      setDisplayContent03('')
      setTimeout(() => {
        setOpacityContent03('')
      }, 100)

      setDisplayContent04('starClickedDisplay')
      setOpacityContent04('starClickedOpacity')

      setDisplayContent05('starClickedDisplay')
      setOpacityContent05('starClickedOpacity')
    }

    if (popUpNumber === 4) {
      setDisplayContent('starClickedDisplay')
      setOpacityContent('starClickedOpacity')

      setDisplayContent02('starClickedDisplay')
      setOpacityContent02('starClickedOpacity')

      setDisplayContent03('starClickedDisplay')
      setOpacityContent03('starClickedOpacity')

      setDisplayContent04('')
      setTimeout(() => {
        setOpacityContent04('')
      }, 100)

      setDisplayContent05('starClickedDisplay')
      setOpacityContent05('starClickedOpacity')
    }

    if (popUpNumber === 5) {
      setDisplayContent('starClickedDisplay')
      setOpacityContent('starClickedOpacity')

      setDisplayContent02('starClickedDisplay')
      setOpacityContent02('starClickedOpacity')

      setDisplayContent03('starClickedDisplay')
      setOpacityContent03('starClickedOpacity')

      setDisplayContent04('starClickedDisplay')
      setOpacityContent04('starClickedOpacity')

      setDisplayContent05('')
      setTimeout(() => {
        setOpacityContent05('')
      }, 100)
    }
  }

  return (
    <ul className='constelation-interactContainer'>
      <li className='constelation-interactContainer--item'>
        <span onClick={() => togglePopUp(1)}>
          <Star01 />
        </span>
        <p className={`${displayContent} ${opacityContent}`}>
          Questione sobre o evento em si.
        </p>
      </li>
      <li className='constelation-interactContainer--item'>
        <span onClick={() => togglePopUp(2)}>
          <Star02 />
        </span>
        <p className={`${displayContent02} ${opacityContent02}`}>
          Entenda mais sobre o local, qual o objetivo e o público-alvo.
        </p>
      </li>
      <li className='constelation-interactContainer--item'>
        <span onClick={() => togglePopUp(3)}>
          <Star03 />
        </span>
        <p className={`${displayContent03} ${opacityContent03}`}>
          Quantas pessoas vão participar.
        </p>
      </li>
      <li className='constelation-interactContainer--item'>
        <span onClick={() => togglePopUp(4)}>
          <Star04 />
        </span>
        <p className={`${displayContent04} ${opacityContent04}`}>
          Quanto tempo você terá disponível.
        </p>
      </li>
      <li className='constelation-interactContainer--item'>
        <span onClick={() => togglePopUp(5)}>
          <Star05 />
        </span>
        <p className={`${displayContent05} ${opacityContent05}`}>
          Saiba mais sobre o local, peça fotos no caso de um evento presencial
          e, no digital, questione sobre a estrutura necessária, como: notebook,
          rede de acesso, iluminação etc.
        </p>
      </li>
    </ul>
  )
}

export default Constelation_interact
