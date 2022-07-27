import React from 'react';
import { InputContainer } from './FormInput.styles';

const FormInput = ({ ...otherProps }) => {
  return (
    <InputContainer>
      <input type="text" {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
