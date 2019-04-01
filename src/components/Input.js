import React from 'react';
import styled, { css } from 'styled-components'

export default ({ ...props }) => (
  <StyledInput {...props} />
);

const StyledInput = styled.input`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 20px 11px;
  background-color: rgba(195,235,255,0.2);
  border-radius: 20px;
  width: 100%;
  border: none;
  outline: none;
  color: rgba(255,255,255,0.8);
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  letter-spacing: 1px;
  margin: 5px auto;

  &::placeholder {
    color: rgba(255,255,255,0.4);
  }

  &:active,
  &:focus {
    background-color: rgba(255,255,255,0.8);
    color: #525f7f;

    &::placeholder {
      color: rgba(82,95,127,0.5);
    }
  }
`;

