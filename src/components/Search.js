import React from 'react'
import styled from 'styled-components'
import ICON from '../images/Search.png'

export default function Search() {
  return (
    <Wrapper>
      <input type='text' placeholder='Cari penyedia jasa...' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 0px 16px;
  width: 100%;
  margin-bottom: 16px;
  input{
    width: 100%;
    height: 48px;
    padding: 12px 16px 12px 32px;
    border-radius: 50px;
    color: white;
    letter-spacing: 1.2px;
    font-size: 16px;
    border: none;
    font-weight: 700;
    background-color: #414141;
    background-image:url(${ICON});
    background-size: 24px;
    background-position: calc(100% - 21px) center;
    background-repeat: no-repeat;
    margin-top: 12px;
    &::-webkit-input-placeholder{
      color: #9D9D9D;
    }
    &::-moz-placeholder{
      color: #9D9D9D;
    }
    &:-ms-input-placeholder{
      color: #9D9D9D;
    }
    &::-ms-input-placeholder{
      color: #9D9D9D;
    }
    &::placeholder{
      color: #9D9D9D;
    }
  }
`;