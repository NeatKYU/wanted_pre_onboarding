import styled from 'styled-components';
import { Toggle } from './components/Toggle';

function App() {
  return (
    <Container>
      <Toggle/>
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
`