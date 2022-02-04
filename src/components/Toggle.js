import { useState } from 'react';
import styled from 'styled-components';

export const Toggle = () => {

	const [isToggle, setIsToggle] = useState(false);

	const handleToggle = () => {
		setIsToggle(!isToggle)
	}

	return (
		<>
			<Container isToggle={isToggle} onClick={handleToggle}>
				<div className='ball'/>
				<div className='other-back'/>
				<div className='wrapper'/>
			</Container>
			<div className='text-section'>
				Toggle switch {isToggle ? 'on' : 'off'}
			</div>
		</>
	)
}

const Container = styled.div`
	width: 100px;
	height: 50px;
	border-radius: 2rem;
	display: flex;
	overflow: hidden;
	position: relative;
	cursor: pointer;

	.wrapper {
		width: ${props => props.isToggle ? '0%' : '100%'};
		height: 100%;
		background-color: lightgray;
		transition: width 0.3s ease-in;
	}

	.other-back {
		width: ${props => props.isToggle ? '100%' : '0%'};
		height: 100%;
		background-color: lightgreen;
		transition: width 0.3s ease-in;
	}

	.ball {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 20%;
		left: ${props => props.isToggle ? '60px' : '10px'};
		transition: left 0.3s ease-in;
		z-index: 1;
		background-color: #fff;
		border-radius: 2rem;
	}
`