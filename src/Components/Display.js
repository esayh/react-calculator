import React from 'react'
import './Display.css'

const Display = (props) => {
	return (
		<div>
			<p>{Number(props.display).toLocaleString('en-US')}</p>
		</div>
	)
}

export default Display
