import React from 'react'
import classes from './Buttons.module.scss'

const button = (props) => (
    <button onClick={props.clicked} className={[classes.Buttons, classes[props.btnType]].join(' ')}>{props.children}</button>
)

export default button