import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./CounterButton.css";

interface CounterButtonProps {
  value: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({ value }) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="button-count-container">
      <button onClick={decrement} className="button-count-button">
        <FiMinus className="button-count" />
      </button>
      <span className="text-count">{count}</span>
      <button onClick={increment} className="button-count-button">
        <FiPlus className="button-count" />
      </button>
    </div>
  );
};

export default CounterButton;
