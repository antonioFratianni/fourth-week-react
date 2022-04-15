import './App.css';
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
import Container from './components/Container';
import Display from './components/Display';
import { useState } from "react";


const buttonValues = [
  ["C", "+-", "%", "/",
  7, 8, 9, "X",
  4, 5, 6, "-",
  1, 2, 3, "+",
  0, ".", "="],
];



function App() {

  const [value, setValue] = useState(0);

  return (
    <Container>
      <Display value={value}/>
      <ButtonContainer>
        {
          buttonValues.flat().map((button, i) => {
            return (
              <Button
                key={i}
                value={button}
                onClick={() => {
                  setValue(button);
                }}
              />
            );
          })
        }
      </ButtonContainer>
    </Container>

  );
}

export default App;
