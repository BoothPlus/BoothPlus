import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const GlobalStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
  }
`;

export default GlobalStyle;
