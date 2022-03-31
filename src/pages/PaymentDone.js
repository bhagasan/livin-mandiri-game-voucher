import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../helper/constant';
import CHECK from '../images/checklist-success.svg';
import BG from '../images/Travel.png';
import BATIK from '../images/batik.png';
import CLOSE from '../images/close.svg';
import PULL from '../images/Pull-Up Chevron.svg';
import { Link } from 'react-router-dom';
import { Spacer } from '../components';


export default function PaymentDone() {
  return (
    <Wrapper>
    <div className='btn-close'><img src={CLOSE} alt='close' /></div>
    <img src={CHECK} alt='check' />
    <h2>Pembayaran Berhasil!</h2>
    <span>28 Jan 2022 • 9:41:32 WIB</span>
    <p>
    Silakan cek email untuk melihat e-ticket Anda
    </p>
    <img src={BG} alt='bg' className='bg' />
    <Transaksi>
      <div className='lihat-resi'>
        <img src={PULL} alt='pull'/>
        Lihat Resi
      </div>
      <span>Lifestyle</span>
      <h2 className='title'>Taksi Bluebird</h2>
      <p>Order ID - 770095671</p>
      <span>Total Transaksi</span>
      <h3>Rp 23.000</h3>
      <Spacer h={6} />
      <Link to='/'><strong className='color-blue'>Lihat Voucher</strong></Link>
      <Spacer h={8} />
    </Transaksi>
    </Wrapper>
  )
}

const Transaksi = styled.div`
  width: 343px;
  max-width: calc(100% - 32px);
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${COLORS.white};
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
  text-align: center;
  padding: 12px 24px;
  background-image: url('${BATIK}');
  background-size: 100%;
  background-position: center -45px;
  background-repeat: no-repeat;

  .lihat-resi{
    position: absolute;
    left: 50%;
    top: -36px;
    transform: translateX(-50%);
    font-weight: bold;
    color: ${COLORS.grey700};
    img{
      display: block;
      margin: auto;
    }
  }

  .color-blue{
    font-size: 14px;
  }

  p{
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${COLORS.white};
  text-align: center;
  padding-top: 100px;

  .btn-close{
    position: absolute;
    right: 21px;
    top: 32px;
    width: 16px;
  }

  h2{
    font-size: 24px;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .bg{
    width: 100%;
  }
  span{
    font-size: 12px;
    color: ${COLORS.grey500};
  }
  p{
    margin-left: auto;
    margin-right: auto;
    max-width: 230px;
    font-size: 16px;
    color: ${COLORS.grey700};
    margin-bottom: 52px;
  }
`;