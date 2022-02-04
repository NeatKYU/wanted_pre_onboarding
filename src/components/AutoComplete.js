import { useEffect, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export const AutoComplete = () => {

	const [inputValue, setInputValue] = useState('');
	const [isFocus, setIsFocus] = useState(false);
	const elRef = useRef();

	const autoList = [
		'Korea', 'Denmark', 'Peru', 'Japen', 'America', 'Italy', 'Africa', 'Afghanistan', 'Brazil', 'France', 'Finland'
	]

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
	}
	
	const deleteInputValue = () => {
		setInputValue('');
	}

	const handleItemClick = (value) => {
		setInputValue(value);
		setIsFocus(false);
	}

	const closeDropdown = ({target}) => {
		if(isFocus && !elRef.current.contains(target)) {
			setIsFocus(false);
		}
	}

	useEffect(() => {
		window.addEventListener('click', closeDropdown);
		return () => {
			window.removeEventListener('click', closeDropdown)
		};
	}, [])

	return (
		<>
			<Container>
				<input 
					value={inputValue} 
					onChange={(e) => handleInputValue(e)}
					onFocus={() => setIsFocus(true)}
					ref={elRef}
				/>
				<div className='delete-button' onClick={deleteInputValue}>
					<IoIosClose/>
				</div>
				<div className='dropdown'>
					{
						autoList && autoList
						.filter((value) => 
							value.toLowerCase().includes(inputValue.toLowerCase()) 
							&& inputValue.length > 0 
							&& isFocus)
						.map((item) => (
							<div 
								className='content' 
								onClick={() => handleItemClick(item)}
							>
								{item}
							</div>
						))
					}
				</div>
			</Container>
		</>
	)
}

const Container = styled.div`
	width: 500px;
	height: auto;
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	border: 1px solid lightgrey;
	box-sizing: border-box;
	padding: 10px;
	position: relative;

	input {
		width: 100%;
		height: 100%;
		border: 0px;
		outline: none;
	}

	.delete-button {
		width: 30px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
		cursor: pointer;
	}

	.dropdown {
		width: 99%;
		height: auto;
		max-height: 200px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 50px;
		left: 3px;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

		.content {
			width: 100%;
			height: 30px;
			line-height: 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			box-sizing: border-box;
			padding-left: 10px;
			cursor: pointer;
			
			&:hover {
				background-color: lightgrey;
			}
		}
	}

`