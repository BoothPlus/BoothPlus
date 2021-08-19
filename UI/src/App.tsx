import { useState } from 'react';

import * as S from './App.styles';
import FloatingButton from './components/FloatingButton/FloatingButton';
import FloatingPanel from './components/FloatingPanel/FloatingPanel';

const App = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.App>
      {active && <FloatingPanel />}
      <FloatingButton active={active} setActive={setActive} />
    </S.App>
  );
};

export default App;
