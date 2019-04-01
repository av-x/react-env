import React from 'react';
import styled, { css } from 'styled-components';

export default ({ className, text, ...props }) => (
  <Button className={className} {...props}>{ text }</Button>
);


const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  background-color: #fcd669;
  border-radius: 20px;
  color: #525f7f;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.9;
  transition: all 200ms ease;

  &:hover:not([disabled]) {
    opacity: 1;
    box-shadow:
      0 6px 9px rgba(50, 50, 93, 0.1),
      0 2px 5px rgba(0, 0, 0, 0.08);
  }

  &[disabled] {
    opacity: 0.3;
  }
`;

