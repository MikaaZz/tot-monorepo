import './_card_image.scss'

import Button from 'libs/ui/src/lib/Button/Button'

interface cardImage {
  paragraph: JSX.Element
  imageLink: string
  imageAlt: string
}

const Card_image = (props: cardImage) => {
  return (
    <>
      <div className='main-cardImage'>
        <div className='main-cardImage--textContainer'>
          {props.paragraph}
          <Button text='Seguir em frente' />
        </div>
        <img
          className='main-cardImage--image'
          src={props.imageLink}
          alt={props.imageAlt}
        />
      </div>
    </>
  )
}

export default Card_image
