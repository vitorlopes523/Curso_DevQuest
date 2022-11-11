import React from 'react'
import './button.css'

// const Button = (props)=> {
//   return <button className='btn'>{props.label}</button>
// }
class Button extends React.Component {
  render() {
    return <button className='btn'>{this.props.label}</button>
  }
}

Button.defaultProps = {
  label: 'Clique aqui com class'
}
export default Button