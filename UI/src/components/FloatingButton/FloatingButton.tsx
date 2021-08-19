import { useState } from 'react';
import * as S from './FloatingButton.styles';
import CloseIcon from '../../assets/close.svg';

const FloatingButton = () => {
  const [active, setActive] = useState(false);

  return (
    <S.FloatingButton onClick={() => setActive(!active)}>
      <S.Plus src={CloseIcon} active={active} />
    </S.FloatingButton>
  );
};

export default FloatingButton;
