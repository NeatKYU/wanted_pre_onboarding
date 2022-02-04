import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export const Tag = () => {

	const [tagList, setTagList] = useState([])

	const [inputValue, setInputValue] = useState('');

	const handleInputText = (e) => {
		setInputValue(e.target.value)
	}

	const handleKeyPress = (e) => {
		if(e.key === 'Enter'){
			setTagList([...tagList, inputValue])
			setInputValue('');
		}
	}

	const deleteTag = (inputValue) => {
		setTagList(tagList.filter((item) => inputValue !== item))
	}

	return (
		<>
			<InputConatiner>
				{
					tagList && tagList.map((item, idx) => (
						<TagButton key={idx}>
							<div>{item}</div>
							<div className='close' onClick={() => deleteTag(item)}><IoIosClose/></div>
						</TagButton>
					))
				}
				<input 
					placeholder='Press enter to add tags' 
					onChange={(e) => handleInputText(e)}
					onKeyPress={(e) => handleKeyPress(e)}
					value={inputValue}
				/>
			</InputConatiner>
		</>
	)
}

const InputConatiner = styled.div`
	width: 500px;
	height: 50px;
	border-radius: 5px;
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 10px;
	overflow: scroll;
	overflow-y: hidden;

	::-webkit-scrollbar {
		height: 1px;
	}

	&:focus-within {
		border: 1px solid black;
	}

	input {
		min-width: 300px;
		width: 100%;
		height: 100%;
		outline: none;
		border: 0px;
	}
`

const TagButton = styled.div`
	width: auto;
	height: 30px;
	border-radius: 5px;
	background-color: lightgreen;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-left: 10px;
	padding-right: 5px;
	margin-right: 5px;
	white-space: nowrap;

	.close {
		width: 20px;
		height: 20px;
		border-radius: 2rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;
		cursor: pointer;

		svg {
			font-size: 1.3rem;
		}
	}
`