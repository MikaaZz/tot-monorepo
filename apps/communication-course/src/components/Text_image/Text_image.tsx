import './_text_image.scss'

interface textImage {
  containerContet: JSX.Element
  imageLink: string
  imageAlt: string
}

const Text_image = (props: textImage) => {
  return (
    <div className='main-textImage'>
      <div className='main-textImage--container'>{props.containerContet}</div>
      <img
        className='main-textImage--image'
        src={props.imageLink}
        alt={props.imageAlt}
      />
    </div>
  )
}

export default Text_image
