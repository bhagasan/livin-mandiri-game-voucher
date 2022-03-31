import React from 'react'
import styled from 'styled-components'

export default function CardGame({thumbnail, title, wide}) {
  return (
    <Wrapper thumbnail={thumbnail} wide={wide}>
      <div className='card-thumbnail' style={{backgroundImage: `url(${thumbnail})`}}></div>
      {title && <div className='card-title'>{title}</div>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  .card-thumbnail{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: calc(100/163*100%);
  }

  .card-title{
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
    text-align: center;
    padding: 0 8px;
  }

  ${({wide})=> wide && `
    .card-thumbnail{
      padding-top: calc(150/343*100%) !important;
    }
  `}
`;