import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ICON from '../images/Left.png';
import HOME from '../images/Home.png';

export default function Nav({title, backTo='/', center}) {
  return (
    <Wrapper className='flex align-center'>
      <Link to={backTo}><img src={ICON} alt="arrow" /></Link>
      <span style={center && {textAlign:'center', width: '100%'}}>{title}</span>
      <Link to={backTo}><img src={HOME} alt="home" /></Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
  padding: 12px 16px;
  height: 56px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
  z-index: 99;
  img{
    margin-top: -3px;
  }
  span{
    display: inline-block;
    color: #1A1A1A;
  }
`;