import styled from 'styled-components';

export const Headercss = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--color-negative);
  width: 100vw;
  top: 0;
  height: var(--height-header);
  text-align: center;
  box-shadow: 0 4px 2px var(--color-negative-dark);
`;

export const Title = styled.h1`
  color: var(--color-zero);
  line-height: var(--height-header);
`;