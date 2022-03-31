import React, {useState} from 'react'
import { Panel } from '../components'
import styled from 'styled-components'
import { COLORS } from '../helper/constant';
import { useHistory } from 'react-router-dom';

export default function Pin() {
  const history = useHistory();
  const [value, setValue] = useState('');
  function renderPin(params){
    const elm = [];
    for(let i = 0; i<6; i++){
      if(i<params){
        elm.push(<i style={{background: COLORS.grey700}} />);
      }else{
        elm.push(<i />);
      }
    }
    if(params === 6) history.push('/paymentDone');
    return elm;
  }
  return (
    <Panel fullscreen title=' ' backTo='/pay'>
      <Wrapper>
        <h2>Masukkan PIN</h2>
        <p>Gunakan PIN Livin' Anda</p>
      </Wrapper>
      <Pass>
        <label htmlFor='pin' className='flex align-center just-center'>
          {renderPin(value.length)}
        </label>
        <input type='text' autoFocus id='pin' value={value} maxLength={6} onChange={(e)=>setValue(e.target.value)} />
      </Pass>
    </Panel>
  )
}

const Wrapper = styled.div`
  text-align: center;
  h2{
    font-size: 24px;
  }
  p{
    font-size: ${COLORS.grey500};
  }
`;

const Pass = styled.div`
  margin-top: 70px;
  text-align: center;
  input{
    opacity: 0;
    height: 0;
    width: 0;
  }
  
  i{
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background:${COLORS.grey500};
    &:not(:last-child){
      margin-right: 16px;
    }
  }
`;