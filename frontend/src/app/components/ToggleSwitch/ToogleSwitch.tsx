import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleSwitch = ({ checked, onChange }) => {
    return (
        <Switch>
            <Input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <Slider />
        </Switch>
    );
};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 81px;
  height: 40px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: transparent;
    border: 1px solid #D0142C;
  }
  
  &:checked + span:before {
    transform: translateX(41px);
    background-color: #D0142C;

  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 1px solid white;
  transition: .4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

export default ToggleSwitch;
