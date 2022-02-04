import { useState } from 'react';
import styled from 'styled-components';

export const Tap = () => {

	const [currentTap, setCurrentTap] = useState(0);

	const handleTap = (tapNum) => {
		setCurrentTap(tapNum)
	}

	return (
		<>
			<Container>
				<div className={`tap ${currentTap === 1 ? 'active':''}`} onClick={() => {setCurrentTap(1)}}>tap1</div>
				<div className={`tap ${currentTap === 2 ? 'active':''}`} onClick={() => {setCurrentTap(2)}}>tap2</div>
				<div className={`tap ${currentTap === 3 ? 'active':''}`} onClick={() => {setCurrentTap(3)}}>tap3</div>
			</Container>
			<div className='text-section'>
				tab menu {currentTap === 1 ? 'ONE' : currentTap === 2 ? 'TWO' : 'THREE'}
			</div>
		</>
	)
}

const Container = styled.div`
	width: 500px;
	height: 50px;
	display: flex;

	.tap {
		width: 33.33%;
		height: 100%;
		background-color: lightgrey;
		cursor: pointer;
		display: flex;
		align-items: center;
		padding-left: 10px;
		
	}

	.active {
		background-color: lightgreen !important;
		transition: background-color 0.3s ease-in-out;
	}

`