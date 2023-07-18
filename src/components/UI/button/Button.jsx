import React from 'react'
import './Button.css'

const Button = ({ children, onClick, ...rest }) => {
	return (
		<button onClick={onClick} {...rest}>
			{children}
		</button>
	)
	
}

 
const getBackground=(props)=>{
	return props.color === 'blue' ? 'blue': "red"
}

export default Button
