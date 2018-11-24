import styled from 'styled-components';

const heightHeader = "60px";

export const Headercss = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-negative);
  height: ${heightHeader};
  text-align: center;
  box-shadow: 0 4px 2px var(--color-negative-dark);
`;

export const Title = styled.h1`
  color: var(--color-zero);
  line-height: ${heightHeader};
`;