import styled from 'styled-components';
import { Toggle } from './components/Toggle';
import { Tap } from './components/Tap';
import { Modal } from './components/Modal';
import { Tag } from './components/Tag';
import { ClickToEdit } from './components/ClickToEdit';
import { AutoComplete } from './components/AutoComplete';

function App() {
  return (
    <Container>
      <Wrapper>
        <div className='title'>Toggle</div>
        <Toggle/>
      </Wrapper>
      <Wrapper>
        <div className='title'>Tap</div>
        <Tap/>
      </Wrapper>
      <Wrapper>
        <div className='title'>Modal</div>
        <Modal/>
      </Wrapper>
      <Wrapper>
        <div className='title'>Tag</div>
        <Tag/>
      </Wrapper>
      <Wrapper>
        <div className='title'>AutoComplete</div>
        <AutoComplete/>
      </Wrapper>
      <Wrapper>
        <div className='title'>ClickToEdit</div>
        <ClickToEdit/>
      </Wrapper>
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 20px;

  .title {
    width: 100%;
    height: 120px;
    padding-left: 20px;
    padding-top: 10px;
    box-sizing: border-box;
  }
`