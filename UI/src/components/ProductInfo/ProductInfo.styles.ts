import styled from '@emotion/styled';

export const ProductInfo = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #eeeeee;
  width: 100%;
  height: 6rem;
  padding: 0.25rem;
  display: flex;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const Divider = styled.div`
  width: 0.0625rem;
  height: 100%;

  background-color: #eeeeee;
  margin: 0 0.25rem;
`;

export const Content = styled.div`
  padding: 0.25rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0.25rem 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #9ea3af;
  word-break: break-word;
  line-height: 1.4;
  max-height: 4.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
