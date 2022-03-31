import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import {COLORS} from '../helper/constant';
import ICON from '../images/arrow-left.svg';


export default function Panel({children, title, backTo='/', noPadding, center, fullscreen}) {
  return (
    <Wrapper noPadding={noPadding} fullscreen={fullscreen}>
      {title && (
        <Header className='flex align-center'>
          <Link to={backTo}><img src={ICON} alt="arrow" /></Link>
          <span style={center && {textAlign:'center', width: '80%'}}>{title}</span>
        </Header>
      )}
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

const Header = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
  padding: 12px 16px;
  img{
    margin-right: 20px;
    margin-top: -3px;
  }
`;

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 16px 0px 32px 0px;
  background-color: ${COLORS.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  -webkit-box-shadow: 0px -4px 4px rgba(0, 0, 0, .1);
  box-shadow: 0px -4px 4px rgba(0, 0, 0, .1);

  ${({noPadding}) => noPadding ? `
    ${Content}{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  `:``}


  ${({fullscreen}) => fullscreen && `
    height: 100vh;
  `}
`;