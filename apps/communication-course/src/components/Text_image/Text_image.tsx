import './_text_image.scss'

interface textImage {
  title: string
  text: string
  imageLink: string
  imageAlt: string
}

const Text_image = (props: textImage) => {
  return (
    <div className='main-textImage'>
      <div className='main-textImage--container'>
        <h2 className='main-textImage--title'>{props.title}</h2>
        <p className='main-textImage--text'>{props.text}</p>
      </div>
      <img
        className='main-textImage--image'
        src={props.imageLink}
        alt={props.imageAlt}
      />
    </div>
  )
}

export default Text_image
