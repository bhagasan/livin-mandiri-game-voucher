import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../helper/constant';
import CHEVRON from '../images/Chevron-Circle Down.png'

export default function BtnSqr({children, onClick, center, role, disabled, bordered}) {
  return (
    <Wrapper 
      role={role}
      bordered={bordered}
      disabled={disabled}
      className={`flex align-center ${center && 'just-center'}`} 
      onClick={onClick}>
      {children}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  height: 62px;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .2);
  padding: 8px 12px;
  font-weight: 700;
  color: #615A5A;
  border-radius: 4px;
  font-size: 16px;
  margin: 12px 0;

  ${({bordered}) => bordered && `
    border: 1px solid ${COLORS.blue};
    color: ${COLORS.blue};
  `}

  ${({disabled}) => disabled && `
    color: black;
    opacity: .35;
    pointer-events: none;
  `}

  ${({role}) => role === 'dropdown' && `
    background-image: url(${CHEVRON});
    background-size: 24px;
    background-position: calc(100% - 24px) center;
    background-repeat: no-repeat;
  `}
`;