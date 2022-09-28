import './_button.scss'

interface buttonInfos {
  download?: string
  interaction?: (event: React.MouseEvent<HTMLElement>) => void
  link: string
  target?: string
  text: string
}

const Button_donwload = function (props: buttonInfos) {
  return (
    <a
      onClick={props.interaction}
      target={props.target}
      href={props.link}
      download={props.download}
      className='main_button'>
      {props.text}
    </a>
  )
}

export default Button_donwload
