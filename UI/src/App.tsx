import * as S from './App.styles';
import FloatingButton from './components/FloatingButton/FloatingButton';
import FloatingPanel from './components/FloatingPanel/FloatingPanel';

const App = () => {
  return (
    <S.App>
      <FloatingPanel />
      <FloatingButton />
    </S.App>
  );
};

export default App;
