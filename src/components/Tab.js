import { useState } from 'react';
import styled from 'styled-components';

export const Tab = () => {

	const [currntTab, setCurrentTab] = useState(1);

	return (
		<>
			<Container>
				<div className={`tab ${currntTab === 1 ? 'active':''}`} onClick={() => {setCurrentTab(1)}}>tab1</div>
				<div className={`tab ${currntTab === 2 ? 'active':''}`} onClick={() => {setCurrentTab(2)}}>tab2</div>
				<div className={`tab ${currntTab === 3 ? 'active':''}`} onClick={() => {setCurrentTab(3)}}>tab3</div>
			</Container>
			<div className='text-section'>
				tab menu {currntTab === 1 ? 'ONE' : currntTab === 2 ? 'TWO' : 'THREE'}
			</div>
		</>
	)
}

const Container = styled.div`
	width: 500px;
	height: 50px;
	display: flex;

	.tab {
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