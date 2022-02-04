import { useState } from 'react';
import styled from 'styled-components';

export const ClickToEdit = () => {

	const [name, setName] = useState('박승규');
	const [showName, setShowName] = useState('박승규');
	const [age, setAge] = useState('30');
	const [showAge, setShowAge] = useState('30');

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleAge = (e) => {
		setAge(e.target.value)
	}

	return (
		<>
			<Container>
				<div className='input-wrapper'>
					<span>이름:</span>
					<input 
						value={name} 
						onChange={(e) => handleName(e)} 
						onBlur={() => setShowName(name)}
					/>
				</div>
				<div className='input-wrapper'>
					<span>나이:</span>
					<input 
						value={age} 
						onChange={(e) => handleAge(e)} 
						onBlur={() => setShowAge(age)}
					/>
				</div>
				<div className='text-section'>
					이름 {showName} 나이 {showAge}
				</div>
			</Container>
		</>
	)
}

const Container = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.input-wrapper {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;

		input {
			margin: 0 5px 0 5px;
			height: 20px;
		}
	}

`