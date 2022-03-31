import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Nav from '../components/Nav';
import Scroller from '../components/Scroller';
import Spacer from '../components/Spacer';
import PopupDetail from '../components/PopupDetail';
import ELLIPSE from '../images/Ellipse2.png';

import ARROW from '../images/Chevron-Circle Up.png';
import { useParams } from 'react-router-dom';
import { Input, CardProduct } from '../components';
import { dataHome} from '../helper/constant';


export default function Product() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [email, setEmail] = useState();
  const [hp, setHp] = useState();
  const {id} = useParams();
  const PT = 'PT Ayopop Teknologi Indonesia';

  useEffect(()=>{
    dataHome.forEach(d => {
      
      if(d.id === id){
        setData(d);
        setSelected(d.vouchers[0].id);
      }
    })
  }, [id]);


  function renderVoucher(params){
    const {length} = params;
    const elm = [];
    let type = null;

    params.forEach(d => {
      if(length > 6){
        type = 'long';
      }
      else if(length > 3){
        type = 'small'
      }
      elm.push(
        <CardProduct key={d.id} 
          title={d.product} 
          price={d.price} 
          type={type} 
          selected={d.id === selected} 
          onClick={()=>setSelected(d.id)}  />
      )
    });
    return elm;
  }
  

  return (
    <Wrapper headline={`http://localhost:3000/images/${data?.thumbnail}`}>
      <Nav title={data?.title} center />
      <Spacer h={38} />
      <Scroller>
        <div className='thumb-container'></div>
        <Spacer h={2} />
        <div className='content-wrapper'>
          <div className='form-container'>
            <Input 
              onChange={(e)=>setEmail(e.target.value)} 
              value={email}
              onReset={()=>setEmail()} 
              label='Email'
              id='email' />
            <Spacer h={8} />
            <Input 
              onChange={(e)=>setHp(e.target.value)} 
              value={hp}
              onReset={()=>setHp()} 
              label='Nomor Hp'
              id='hp' />
          </div>
        </div>
        <div className='list-title'>Pilih Voucher</div>
        <div className='cards-container'>
          <div className={`cards-list ${data?.vouchers.length < 4 && 'scroll-x'} ${data?.vouchers.length === 1 && 'center'}`}>
            {data && renderVoucher(data.vouchers)}
          </div>
        </div>
      </Scroller>
      <div style={{padding: '0px 16px'}}>
        <div className='action-detail' onClick={()=>setModal(true)}>
          <img src={ARROW} alt='arrow' />
          <div>Lihat detail voucher</div>
        </div>
        <Button 
        fluid type='fill'>Bayar Sekarang</Button>
        <p className='ket'>
          Produk atau jasa ini disediakan oleh {PT} dan Bank Mandiri tidak bertanggung jawab atas produk atau jasa tersebut.
        </p>
      </div>
      <PopupDetail isActive={modal} onClose={()=>setModal(false)} />
      <img className='bg-ellipse' src={ELLIPSE} alt='bg elipse' />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  .thumb-container{
    width: 100%;
    padding-top: calc(200/375*100%) ;
    margin: auto;
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${({headline}) => headline}')
    
  }
  .bg-ellipse{
    z-index: -1;
    position: absolute;
    left: 0;
    top: 320px;
    pointer-events: none;
  }
  .list-title{
    text-align: center;
    margin: 34px 0 16px 0;
    font-size: 14px;
    font-weight: 600;
    color: #ADA6AE;
  }
  .content-wrapper{
    padding: 0 16px;
    margin-top: -44px;
  }
  .form-container{
    padding: 16px;
    background-color: #403d3b;
    border-radius: 8px;
  }
  .action-detail{
    text-align: center;
    font-size: 12px;
    margin: 14px 0;
  }
  .cards-container{
    overflow: auto;
    width: 100%;
    padding: 0px 16px;

    .cards-list{
      justify-content: center;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;

      .card-product{
        margin-bottom: 16px;
      }

      &.center{
        -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
                justify-content: center !important;
      }

      &.scroll-x{
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;

      }

    }
  }

  .ket{
    font-size: 10px;
    line-height: 12.5px;
    text-align: center;
    color: #ADA6AE;
    margin-top: 16px;
  }
`;

