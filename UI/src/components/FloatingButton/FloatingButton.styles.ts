import styled from '@emotion/styled';

export const FloatingButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: #fc4d50;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border: 0;
  border-radius: 30%;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Plus = styled.img<{ active: boolean }>`
  width: 1rem;
  height: 1rem;

  transform: ${({ active }) => active && 'rotate(45deg)'};
  transition: all 0.2s;
`;
