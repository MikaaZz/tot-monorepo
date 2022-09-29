import './_button.scss'

interface buttonInfos {
  interaction?: any
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
