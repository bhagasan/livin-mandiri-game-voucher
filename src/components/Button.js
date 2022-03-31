import React from 'react'
import styled from 'styled-components'

import {COLORS} from '../helper/constant'

export default function Button({children, fluid = false, type, className, onClick, disabled}, props) {
  return (
    <BtnStyled 
      {...props}
      onClick={onClick}
      styleType={type}
      disabled={disabled} 
      className={className}
      fluid={fluid}>
      {children}
    </BtnStyled>
  )
}

const BtnStyled = styled.button`
  padding: 18px;
  border-radius: 52px;
  font-size: 16px;
  font-weight: 700;

  ${({disabled}) => disabled && `
    opacity: .35;
    pointer-events: none;
  `}
  
  ${({fluid}) => fluid ? `width: 100%`:``};
  
  ${({styleType}) => styleType === 'fill' ? `
    background: linear-gradient(88.47deg, #4DD4FF 0%, #2F5CCF 100%);
    border: none;
    color: ${COLORS.white};
    border-color: transparent;
    -webkit-box-shadow: 0px 4px 12px rgba(77, 212 , 255, .15);
    box-shadow: 0px 4px 12px rgba(77, 212 , 255, .15);
  `:`
    background-color: transparent;
    border-color: ${COLORS.blue};
    color: ${COLORS.blue}
  `
  }
`;