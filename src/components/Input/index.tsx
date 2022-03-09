import React, { InputHTMLAttributes, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur(): void {
    setIsFocus(false);
    // o !! transforma a info em booleano
    setIsFilled(!!rest.value);
  }

  return (
    <Container isFilled={isFilled} isFocus={isFocus}>
      {Icon && <Icon />}
      <input
        type="text"
        {...rest}
        onFocus={() => setIsFocus(true)}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;
