import React, {Fragment, useState} from 'react'
import styled from 'styled-components'

import {COLORS} from '../helper/constant'
import CANCEL from '../images/Cancel.png'

export default function Input({
  type = 'text', 
  label, id, 
  placeholder, 
  value='', 
  onChange, 
  onReset, 
  dataOptions=[],
  isErr,
  errMsg
  }) {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocus(param){
    setIsFocus(param)
  }

  function renderOptions(params){
    const elm  = params.map(d => <option key={`opt-${d.id}`} value={d.value}>{d.label}</option>);
    return elm;
  }

  
  if(type === 'options'){
    return(
      <Wrapper htmlFor={id} isFocus={isFocus} value={value} type={type}>
      <span>{label}</span>
      <select id={id}>
        {renderOptions(dataOptions)}
        </select>
      </Wrapper>
    )
  }

  return (
    <Fragment>
      <Wrapper htmlFor={id} isFocus={isFocus} value={value} isErr={isErr}>
        <span>{label}</span>
        <input id={id} 
          type={type} 
          placeholder={placeholder} 
          value={value}
          onBlur={()=>handleFocus(false)}
          onFocus={()=>handleFocus(true)}
          onChange={onChange} />
        {!isFocus && value &&  <button className='reset' onClick={onReset}><img src={CANCEL} alt='cancel' /></button>}
      </Wrapper>
      {isErr && <ErrMsg>{errMsg}</ErrMsg>}
    </Fragment>
  )
}

const ErrMsg = styled.div`
  color: ${COLORS.red};
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1;
  margin-top: -4px;
  margin-bottom: 12px;
`;

const Wrapper = styled.label`
  position: relative;
  height: 56px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .15);
  padding: 6px 16px;
  margin: 0px 0px 8px 0;
  display: block;

  span{
    font-weight: 400;
    line-height: 1.3;
    display: block;
    margin-bottom: 4px;
    color: white;
    font-size:16px;
    -webkit-transform: translateY(12px);
    -ms-transform: translateY(12px);
    transform: translateY(12px);
    ${({type}) => type === 'options' && `
      color: ${COLORS.grey500};
      font-size:12px;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    ` }
  }

  input, select{
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none !important;
    color: white;
    letter-spacing: 1.1px;
  }

  .reset{
    position: absolute;
    right: 18px;
    top: 17px;
    width: 20px;
    border: none;
    background: transparent;
    outline: none;
  }

  ${({value, isFocus}) => {
    if(value.length > 0 || isFocus){
      return `
        span{
          font-size:12px;
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          transform: translateY(0);
          color: ${COLORS.grey500};
        }
      `
    }
  }}

  ${({isFocus}) => isFocus ? `
    border-bottom: 2px solid ${COLORS.blue};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    span{
      color: white;
    }
  ` : ''};

  ${({isErr}) => isErr && `
    border-bottom: 2px solid ${COLORS.red};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    span{
      color: ${COLORS.red};
    }
  `}
`;