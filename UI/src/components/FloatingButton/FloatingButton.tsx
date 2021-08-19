import * as S from './FloatingButton.styles';
import CloseIcon from '../../assets/close.svg';

interface Props {
  active: boolean;
  setActive: (value: React.SetStateAction<boolean>) => void;
}

const FloatingButton = ({ active, setActive }: Props) => {
  return (
    <S.FloatingButton onClick={() => setActive(!active)}>
      <S.Plus src={CloseIcon} active={active} />
    </S.FloatingButton>
  );
};

export default FloatingButton;
