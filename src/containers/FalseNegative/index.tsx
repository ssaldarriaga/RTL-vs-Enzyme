import React from 'react';

// Components
import { Button } from '../../components/Button';

// Styled components
import { Counter, Container } from './styles';

import './styles.css';

type CounterProps = {
  counter: number;
  onIncreaseCounter: (ev: React.MouseEvent) => void;
  onDecreaseCounter: (ev: React.MouseEvent) => void;
  onReset: (ev: React.MouseEvent) => void;
};

const StyledComponents: React.FC<CounterProps> = ({
  counter,
  onIncreaseCounter,
  onDecreaseCounter,
  onReset,
}) => {
  return (
    <Container>
      <Button onClick={onReset} aria-label="Reset">
        Reset
      </Button>
      <Counter aria-label="Counter">{counter}</Counter>
      <div>
        <Button onClick={onDecreaseCounter} aria-label="Decrease">
          -
        </Button>
        <Button onClick={onIncreaseCounter} aria-label="Increase">
          +
        </Button>
      </div>
    </Container>
  );
};

const Css: React.FC<CounterProps> = ({
  counter,
  onIncreaseCounter,
  onDecreaseCounter,
  onReset,
}) => {
  return (
    <section className="counter__container">
      <button onClick={onReset} aria-label="Reset" className="counter--button">
        Reset
      </button>
      <span className="counter--counter" aria-label="Counter">
        {counter}
      </span>
      <div>
        <button
          onClick={onDecreaseCounter}
          aria-label="Decrease"
          className="counter--button"
        >
          -
        </button>
        <button
          onClick={onIncreaseCounter}
          aria-label="Increase"
          className="counter--button"
        >
          +
        </button>
      </div>
    </section>
  );
};

export const FalseNegative: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  const handleDecrease = (ev: React.MouseEvent) => {
    ev.preventDefault();
    setCounter((prev) => prev - 1);
  };

  const handleIncrease = (ev: React.MouseEvent) => {
    ev.preventDefault();
    setCounter((prev) => prev + 1);
  };

  const handleReset = (ev: React.MouseEvent) => {
    ev.preventDefault();
    setCounter(0);
  };

  return (
    <Css
      counter={counter}
      onReset={handleReset}
      onIncreaseCounter={handleIncrease}
      onDecreaseCounter={handleDecrease}
    />
  );
};
