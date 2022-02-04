import styled from 'styled-components';
import { Toggle } from './components/Toggle';
import { Tap } from './components/Tap';

function App() {
  return (
    <Container>
      <Box/>
      <Toggle/>
      <Box/>
      <Tap/>
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 100%;
    height: 50px;
  }
`

const Box = styled.div`
  width: 100%;
  height: 50px;
`