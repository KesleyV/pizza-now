import React, { useState, useEffect, ReactNode } from 'react';
import './IconButton.css';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, selected }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selected !== undefined) {
      setIsSelected(selected);
    }
  }, [selected]);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onClick) {
      onClick();
    }
  };

  return isSelected ? (
    <button className="icon-button-selected" onClick={handleClick}>
      {icon}
    </button>
  ) : (
    <button className="icon-button" onClick={handleClick}>
      {icon}
    </button>
  );
};

export default IconButton;
