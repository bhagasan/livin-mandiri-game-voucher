import React from 'react'
import styled from 'styled-components';
import Scroller from './Scroller';
import Button from './Button';

export default function PopupDetail({isActive = false, onClose}) {
  return (
    <Wrapper className={isActive ? 'active' : ''}>
      <div className='popup-title'>Cara Pemakaian Voucher</div>
      <Scroller h={'80vh'}>
        <p>
          IMVU merupakan game simulator 3D, dimana kamu bisa bertemu dengan banyak pemain di dunia 3D yang sangat luas. Kamu bisa bertemu dengan orang lain dan lakukan kustomisasi avatar semenarik mungkin di game ini. Yuk cari teman baru di IMVU!
        </p>
        <ol>
          <li>Kunjungi website Imvu (https://www.imvu.com/).</li>
          <li>Klik log in.</li>
          <li>Masukkan Username/E-mail dan password.</li>
          <li>Setelah masuk, arahkan kursor ke arah koin. Klik Credits Sale</li>
          <li>Pilih Gift Card pada menu bagian atas, Masukkan Serial Code untuk Imvu pada kolom Gift Card Redemption, dan Klik Redeem untuk menyelesaikan.</li>
        </ol>
      </Scroller>
      <Button 
        fluid type='fill' 
        onClick={onClose}>Tutup</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #222222;
  padding: 24px;
  font-size: 16px;
  line-height: 24px;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition-duration: .5s;
  -o-transition-duration: .5s;
          transition-duration: .5s;
  pointer-events: none;

  &.active{
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);
    pointer-events: auto;
  }


  .popup-title{
    text-align: center;
    color: white;
    margin-bottom: 8px;
    font-weight: 600;
  }

  ol{
    padding-left: 21px;
  }
`;