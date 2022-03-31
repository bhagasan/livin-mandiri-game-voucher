import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../helper/constant';
import CLOSE from '../images/Close.png';
import BtnSqr from './BtnSqr';
// import Button from './Button';
// import Spacer from './Spacer';

export default function PopupProduct({onClose, data, onSelected}) {
  function renderData(params){
    const elm = params.map(d=> (
      <BtnSqr 
        key={`product-${d.id}`}
        disabled={!d.status} 
        onClick={()=>onSelected(d.id)}
        center>{d.title} {d.note && `(${d.note})`}</BtnSqr>
    ))
    return elm;
  }
  return (
    <Wrapper>
      <div className='panel'>
        <div className='panel-header flex just-between align-center'>
          <span>Pilih Produk</span>
          <span onClick={onClose}><img src={CLOSE} alt='close' /> </span>
        </div>
        <div className='panel-body'>
          <div className='scroller'>
          {renderData(data)}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .75);
  
  .panel{
    background-color: ${COLORS.white};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
    padding: 72px 0px 32px 0px;
    overflow: hidden;

    .panel-header{
      font-weight: 700;
      font-size: 18px;
      -webkit-box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
              box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 62px;
      padding: 16px;
    }

    .scroller{
      height: 250px;
      overflow: auto;
      padding: 0px 16px;
    }
  }
`;