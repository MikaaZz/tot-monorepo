import { useState } from 'react'
import './_list_interact.scss'

interface listInteract {
  imageLinkOne: string
  imageAltOne: string
  imageLinkTwo: string
  imageAltTwo: string
  imageLinkThree: string
  imageAltThree: string
}

const List_interact = (props: listInteract) => {
  const [showContent, setShowContent] = useState('')

  const [showContentOne, setShowContentOne] = useState(
    'main-listInteract__hiddenContent'
  )

  const [showContentTwo, setShowContentTwo] = useState(
    'main-listInteract__hiddenContent'
  )

  const [showImage, setShowImage] = useState('')

  const [showImageOne, setShowImageOne] = useState(
    'main-listInteract__hiddenImage'
  )

  const [showImageTwo, setShowImageTwo] = useState(
    'main-listInteract__hiddenImage'
  )

  return (
    <>
      <div className='main-listInteract'>
        <div className='main-listInteract__textContainer'>
          <h4 className='main-listInteract__textContainer--title'>
            Interaja e entenda:
          </h4>
          <ul className='main-listInteract__textContainer__list'>
            <li
              id='itemOne'
              onClick={() => {
                setShowImage('main-listInteract__hiddenImage')
                setShowImageOne('')
                setShowContentOne('')
              }}
              className={`main-listInteract__textContainer__list--item ${showContent}`}>
              <h3>1</h3>
              <p>
                Conheça a faixa etária, os gostos destas pessoas, de onde elas
                vêm e quais expectativas trazem consigo.
              </p>
            </li>
            <li
              id='itemTwo'
              onClick={() => {
                setShowImageOne('main-listInteract__hiddenImage')
                setShowImageTwo('')
                setShowContentTwo('')
              }}
              className={`main-listInteract__textContainer__list--item ${showContentOne}`}>
              <h3>2</h3>
              <p>
                Conhecer o público-alvo, está diretamente ligado a adaptar a
                linguagem e a comunicação. Ou seja, como você vai se comunicar
                com este público, de qual maneira você vai adaptar o seu
                discurso.
              </p>
            </li>
            <li
              id='itemThree'
              className={`main-listInteract__textContainer__list--item ${showContentTwo}`}>
              <h3>3</h3>
              <p>
                É importante que você tenha conhecimento sobre a infraestrutura
                do ambiente onde você se comunicará. Por isso, se faça as
                seguintes perguntas:
              </p>
            </li>
          </ul>
        </div>
        <img
          className={`main-listInteract--image ${showImage}`}
          src={props.imageLinkOne}
          alt={props.imageAltOne}
        />
        <img
          className={`main-listInteract--image ${showImageOne}`}
          src={props.imageLinkTwo}
          alt={props.imageAltTwo}
        />
        <img
          className={`main-listInteract--image ${showImageTwo}`}
          src={props.imageLinkThree}
          alt={props.imageAltThree}
        />
      </div>
    </>
  )
}

export default List_interact
