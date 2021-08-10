import React from 'react';
import './NumPad.css';

const NumPad = (props) => {
	const {
		allClear,
		switchVal,
		percentOf,
		division,
		addOnDisplay,
		multiply,
		subtract,
		plus,
		checkZero,
		incluDecimal,
		outCome,
	} = props;
	return (
		<div>
			<div id='keyboard'>
				<div className='group'>
					<div className='top-section'>
						<button onClick={(e) => allClear(e.target.id)} className='operator' id='allClear'>
							AC
						</button>
						<button
							onClick={(e) => switchVal(e.target.id)}
							className='operator'
							id='switchVal'
						>
							±
						</button>
						<button
							onClick={(e) => percentOf(e.target.id)}
							className='operator'
							id='percentOf'
						>
							%
						</button>
					</div>
					<div className='middle-section'>
						<div>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='7'>
								7
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='8'>
								8
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='9'>
								9
							</button>
						</div>
						<div>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='4'>
								4
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='5'>
								5
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='6'>
								6
							</button>
						</div>
						<div>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='1'>
								1
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='2'>
								2
							</button>
							<button onClick={(e) => addOnDisplay(e.target.id)} className='number' id='3'>
								3
							</button>
						</div>
						<div>
							<button onClick={(e) => checkZero(e.target.id)} className='number' id='0'>
								0
							</button>
							<button onClick={(e) => incluDecimal(e.target.id)} className='number' id='.'>
								.
							</button>
						</div>
					</div>
				</div>
				<div className='side-section'>
					<button onClick={(e) => division(e.target.id)} className='operator' id='÷'>
						÷
					</button>
					<button onClick={(e) => multiply(e.target.id)} className='operator' id='*'>
						*
					</button>
					<button onClick={(e) => subtract(e.target.id)} className='operator' id='-'>
						-
					</button>
					<button onClick={(e) => plus(e.target.id)} className='operator' id='+'>
						+
					</button>
					<button onClick={(e) => outCome(e.target.id)} className='operator equal' id='='>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default NumPad;
