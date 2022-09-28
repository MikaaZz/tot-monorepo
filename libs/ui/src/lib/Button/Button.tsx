import './_button.scss'

interface buttonInfos {
  interaction?: (event: React.MouseEvent<HTMLElement>) => void
  text: string
}

const Button = function (props: buttonInfos) {
  return (
    <button onClick={props.interaction} className='main_button'>
      {props.text}
    </button>
  )
}

export default Button
