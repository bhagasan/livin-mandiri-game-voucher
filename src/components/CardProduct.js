import React from 'react'
import styled from 'styled-components';

import CARD_BG from '../images/bg-product.png';

export default function CardProduct({title, price, type, selected, onClick}) {
  return (
    <Wrapper type={type} selected={selected} className='card-product' onClick={onClick} style={{backgroundImage: `url('${CARD_BG}')`}}>
      <div>
        <div className='card-product__title'>{title}</div>
        <div className='card-product__subtitle'>Rp {price}</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({selected}) => !selected && `
    background-image: none !important;
    background-color: rgba(182, 188, 191, 0.2);

  `}

  ${({type}) => {
    switch(type){
      case 'small': return `
        width: 167px;
        min-width: 167px;
        height: 74px;
        margin-right: 10px;
        .card-product__title{
          font-size: 16px !important;
          line-height: 24px !important;
        }
        .card-product__subtitle{
          font-size: 12px !important;
          line-height: 18px !important;
          font-weight: 400 !important;
        }
        `
        case 'long': return`
        width: 343px;
        min-width: 343px;
        height: 74px;
        .card-product__title{
          font-size: 16px !important;
          line-height: 24px !important;
        }
        .card-product__subtitle{
          font-size: 12px !important;
          line-height: 18px !important;
          font-weight: 400 !important;
        }
        `;
        default: return`
        width: 300px;
        min-width: 300px;
        height: 150px;
        margin-right: 16px;
      `;
    }
  }}

  .card-product__title, .card-product__subtitle{
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: white;
  }
  .card-product__subtitle{
    font-size: 16px;
    margin-top: 4px;
  }
`;