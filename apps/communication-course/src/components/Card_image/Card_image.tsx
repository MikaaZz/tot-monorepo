import './_card_image.scss'

import Button from 'libs/ui/src/lib/Button/Button'

interface cardImage {
  cardContent: JSX.Element
  imageLink: string
  imageAlt: string
}

const Card_image = (props: cardImage) => {
  return (
    <>
      <section className='main-cardImage'>
        <div className='main-cardImage--textContainer'>{props.cardContent}</div>
        <img
          className='main-cardImage--image'
          src={props.imageLink}
          alt={props.imageAlt}
        />
      </section>
    </>
  )
}

export default Card_image
