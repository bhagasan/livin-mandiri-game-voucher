import React, {Fragment, useState} from 'react'
import styled from 'styled-components';
import { COLORS } from '../helper/constant';
import CLOSE from '../images/close.svg';
import PLANE from '../images/plan.svg';
import CHEVRON from '../images/chevron-down.svg';
import ARROW from '../images/arrow-right.svg';
import Spacer from './Spacer';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Popup({onClose}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Wrapper>
      <div className='panel'>
        <div className='panel__header flex align-center'>
          <h4>Konfirmasi Pembayaran</h4>
          <div className='header-close' onClick={onClose}>
            <img src={CLOSE} alt='close' />
          </div>
        </div>
        <Spacer h={6} />
        <div className='panel__body'>
          <div className='flex align-center'>
            <img src={PLANE} alt='' className='icon' />
            <div className='confirm-details'>
              <h4>Kode Voucher Google Play (IDR)</h4>
              <p>Order ID - 770095671</p>
            </div>
          </div>
          <hr/>
          <Spacer h={6} />
          {collapsed && (
            <Fragment>
              <div className='flex'>
                <div style={{color: COLORS.grey500}}>Penyedia Layanan</div>
                <div className='text-right'>Free Fire</div>
              </div><Spacer h={16} />
              <hr/>
            </Fragment>
          )}
          <strong 
            onClick={()=>setCollapsed(!collapsed)}
            className='color-blue flex align-center'>
            Detail Tagihan 
            <img src={CHEVRON} alt='chevron' 
            style={collapsed ? {marginLeft: '8px', transform:'rotate(180deg)'} : {marginLeft: '8px'}} />
          </strong>
          <Spacer h={8} />
          <hr/>
          <div className='flex'>
            <div>Nominal</div>
            <div className='text-right'><strong>Rp 23.000</strong><sup>00</sup></div>
          </div>
          <Spacer h={16} />
          <div className='flex'>
            <div>Biaya Transaksi</div>
            <div className='text-right'><strong>Gratis</strong></div>
          </div>
          <Spacer h={21} />
        </div>
        <Spacer h={8} style={{background: COLORS.grey100}} />
        <div className='panel__body'>
          <Spacer h={26} />
          <div>Rekening Sumber</div>
          <Spacer h={6} />
          <div className='rekening-sumber'>
            <strong>Tabungan Gold Bisnis - 1002883773118</strong>
            <Spacer h={6} />
            <div>Rp 89.299.940<sup>00</sup></div>
          </div>
          <Spacer h={26} />
          <Link to='/pin'>
            <Button fluid type='fill' className='flex btn-lanjut align-center'>
              <span className='text-left'>Lanjut Bayar</span>
              <span className='text-right flex just-end align-center'>
                Rp 23.000<img src={ARROW} alt='' style={{marginLeft: '8px'}} /></span>
            </Button>
          </Link>
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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
    padding-bottom: 32px;
  }
  .flex >div{
    width: 100%;
  }
  .panel__header{
    height: 52px;
    width: 100%;
    padding: 8px 16px;
    h4{
      font-size: 18px;
    }
    .header-close{
      position: absolute;
      right: 18px;
      top: 21px;
      width: 24px;
      z-index: 1;
    }
  }
  .panel__body{
    
    padding: 0px 16px;
    .icon{
      margin-right: 16px;
    }
    .confirm-details{
      h4{
        font-size: 18px;
        margin: 0;
      }
      p{
        margin: 0;
        color: ${COLORS.grey700};
        font-size: 16px;
      }
    }

    .rekening-sumber{
      padding: 12px 16px;
      -webkit-box-shadow: 0px 4px 6px rgba(0, 0, 0, .1);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, .1);
    }

    .btn-lanjut{
      span{
        display: block;
        width: 100%;
      }
    }
  }
`;