import React from 'react'
import styled from 'styled-components'
import {CardGame, Nav, Search, Spacer} from '../components'
import { Link } from 'react-router-dom';
import {dataHome} from '../helper/constant';
import ELLIPSE1 from '../images/Ellipse1.png';

// const DATA = 

export default function Home() {
  function renderVourcher(param){
    const elm = param.map(d => (
      <Link to={`/product/${d.id}`} style={{width: '50%'}}>
        <CardGame thumbnail={`http://localhost:3000/images/${d.thumbnail}`} title={d.title} key={`voucher-${d.id}`} />
      </Link>
    ));
    return elm;
  }
  return (
    <Wrapper>
      <img className='bg-ellipse1' src={ELLIPSE1} alt='bg elipse' />
      <Nav title='Voucher Game' center />
      <Spacer h={62} />
      <Search />
      <div className='flex wrap' style={{padding: '0px 16px'}}>
        {renderVourcher(dataHome)}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
  width: 560px;
  max-width: 100%;
  .bg-ellipse1{
    z-index: -1;
    position: absolute;
    right: 0;
    top: 50px;
    pointer-events: none;
  }
`;  