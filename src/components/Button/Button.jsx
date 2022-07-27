import React from 'react';
import { ButtonStyle } from './Button.styles';

const Button = ({ title, width, bgcolor, color }) => {
  return (
    <div>
      <ButtonStyle width={width} color={color} bgcolor={bgcolor}>
        {title}
      </ButtonStyle>
    </div>
  );
};

export default Button;
