import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../helper/constant';

import CHECK from '../images/checklist-circle.svg';
import CARD from '../images/debit-card.png';

export default function CardDebit() {
  return (
    <Wrapper>
      <div className='details'>
        <div className='title'>Tabungan Gold Bisnis <img src={CHECK} alt='check' /></div>
        <div className='subtitle'>1002883773118</div>
        <div className='price color-blue'>Rp 89.299.940<sup>00</sup></div>
      </div>
      <img src={CARD} className='debit-card' alt='card' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 340px;
  border-radius: 6px;
  overflow: hidden;
  -webkit-box-shadow: 0px 4px 12px rgba(0, 0, 0, .2);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, .2);
  .details{
    width: calc(100% - 72px);
    background: ${COLORS.white};
    border-radius: 6px;
    padding: 12px 16px;
    z-index: 2;
    position: relative;
    overflow: hidden;

    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 6px;
      bottom: 0;
      left: 0;
      background: ${COLORS.blue};
    }

    .title{
      font-size: 18px;
      img{
        position: relative;
        margin-left: 6px;
        top: 2px;
      }
    }
    .subtitle{
      font-size: 16px;
      color: ${COLORS.grey700};
      line-height: 1.6;
    }
    .price{
      font-size: 16px;
      font-weight: bold;
      line-height: 1.6;

      sup{
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
  .debit-card{
    position: absolute;
    right: 0;
    top: 0;
  }
`;