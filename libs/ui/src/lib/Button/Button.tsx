import './_button.scss'

interface buttonInfos {
  text: string
}

const Button = function (props: buttonInfos) {
  return <button className='main_button'>{props.text}</button>
}

export default Button
