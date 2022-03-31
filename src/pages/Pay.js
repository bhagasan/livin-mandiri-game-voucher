import React,{useState} from 'react'
import { Button, Panel, Spacer, DebitList, Popup } from '../components'

import styled from 'styled-components';
import { COLORS } from '../helper/constant';

import PLANE from '../images/plan.svg'

export default function Pay() {
  const [popupActive, setPopupActive]= useState(false);
  return (
    <Panel fullscreen title=' ' noPadding backTo='/product'>
      <Headline>
        <img src={PLANE} alt='avatar' />
        <h4>Kode Voucher Google Play (IDR)</h4>
        <p>Order ID - 770095671</p>
      </Headline>
      <Spacer h={52} />
      <Price>
        <span>Nominal</span>
        <h1>Rp 23.000</h1>
      </Price>
      <Spacer h={23}/>
      <DebitList />
      <Spacer style={{paddingTop: '35vh'}} />
      <div style={{padding: '8px 16px'}}>
        <Button fluid type='fill' onClick={()=>setPopupActive(true)}>Lanjutkan</Button>
      </div>
      {popupActive && <Popup onClose={()=>setPopupActive(false)} />}
    </Panel>
  )
}


const Price = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  span{
    display: block;
    font-size: 12px;
    color: ${COLORS.grey500};
  }
  h1{
    font-size: 36px;
    margin: 0;
  }
`;


const Headline = styled.div`
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  img{
    width: 48px;
    margin-top: -52px;
  }
  h4{
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  p{
    margin: 0;
    font-size: 16px;
    color: ${COLORS.grey700};
  }
`;