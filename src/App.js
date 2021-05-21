import React, { Component } from 'react'
import Display from './Components/Display'
import NumPad from './Components/NumPad'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			display: '0',
			prevNum: '',
			currNum: '',
			operation: '',
		}
	}

	addOnDisplay = (val) => {
		console.log(val)
		if (this.state.display === '0') {
			this.setState({
				display: val
			})
		} else {
			this.setState({
				display: this.state.display + val,
			})
		}
	}
	plus = () => {
		this.setState({
			prevNum: this.state.display,
			display: '',
			operation: 'add',
		})
	}
	subtract = () => {
		this.setState({
			prevNum: this.state.display,
			display: '',
			operation: 'minus',
		})
	}
	multiply = () => {
		this.setState({
			prevNum: this.state.display,
			display: '',
			operation: 'times',
		})
	}
	division = () => {
		this.setState({
			prevNum: this.state.display,
			display: '',
			operation: 'divide',
		})
	}
	outCome = () => {
		let { prevNum, currNum, display } = this.state
		currNum = display
		if (this.state.operation === 'add') {
			this.setState({
				display: Number(prevNum) + Number(currNum),
			})
		} else if (this.state.operation === 'minus') {
			this.setState({
				display: Number(prevNum) - Number(currNum),
			})
		} else if (this.state.operation === 'times') {
			this.setState({
				display: Number(prevNum) * Number(currNum),
			})
		} else if (this.state.operation === 'divide') {
			this.setState({
				display: Number(prevNum) / Number(currNum),
			})
		}
	}
	checkZero = (val) => {
		console.log(val)
		if (this.state.display !== '0') {
			this.setState({
				display: this.state.display + val,
			})
		}
	}
	incluDecimal = (val) => {
		if (this.state.display.indexOf('.') === -1) {
			this.setState({ display: this.state.display + val })
		}
	}
	switchVal = () => {
		if (this.state.display !== '0') {
			this.setState({
				display: Number(this.state.display * -1),
			})
		}
	}
	percentOf = () => {
		this.setState({
			display: Number(this.state.display * 0.01),
		})
	}
	allClear = () => {
		this.setState({ display: '0', prevNum: '', currNum: '', operation: '' })
	}




	render() { 
		return (
			<div className='main'>
				<div className='heading'>
					<span></span>
					<span>Calculator</span>
					<span>
						<label htmlFor=''>
							<span className='btn'></span>
							<span></span>
						</label>
					</span>
				</div>
				<div className='results'>
					<div className='history'>
						<div className="upper-value">
						<Display display={this.state.display} />
						</div>
						
					</div>
					<div className='output'>
						<p className='lower-value'></p>
					</div>
				</div>
				<NumPad
					allClear={this.allClear}
					switchVal={this.switchVal}
					percentOf={this.percentOf}
					division={this.division}
					addOnDisplay={this.addOnDisplay}
					multiply={this.multiply}
					subtract={this.subtract}
					plus={this.plus}
					checkZero={this.checkZero}
					incluDecimal={this.incluDecimal}
					outCome={this.outCome}
				/>
			</div>
		)
	}
}

export default App
