import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  0% {
    opacity :0;
  } 100% {
    opacity: 1;
  }
`;

export const FloatingPanel = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 5rem;
  width: 31.5rem;
  min-height: 20rem;
  background-color: #f7f9f9;
  border: 1px solid #eeeeee;
  border-radius: 0.5rem;
  padding: 0.5rem;
  animation: ${fadeIn} 0.2s ease-out;
`;
