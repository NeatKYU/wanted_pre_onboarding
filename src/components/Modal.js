import { useState } from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io'

export const Modal = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<Container onClick={handleModalOpen}>
				Open Modal
			</Container>
			<ModalComponent isModalOpen={isModalOpen}>
				<div className='wrapper'></div>
				<div className='modal'>
					<div className='close-button' onClick={handleModalClose}><IoIosClose/></div>
					<div className='modal-body'>
						<span>안녕하세요 원티드 여러분!!</span>
					</div>
				</div>
			</ModalComponent>
		</>
	)
}

const Container = styled.div`
	width: 100px;
	height: 50px;
	border-radius: 2rem;
	background-color: lightgreen;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 13px;

`

const ModalComponent = styled.div`
	display: ${props => props.isModalOpen ? 'flex' : 'none'};
	z-index: 100;

	.wrapper {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		opacity: 0.5;
	}

	.modal {
		width: 300px;
		height: 200px;
		background-color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: .5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		.close-button {
			width: 50px;
			height: 70px;
			font-size: 2rem;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.modal-body {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			
		}
		
	}

`