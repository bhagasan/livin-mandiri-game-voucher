import React from 'react'
import styled from 'styled-components'

export default function Scroller({children, h}) {
  return (
    <Wrapper h={h}>{children}</Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  overflow: auto;
  margin-bottom: 12px;
  padding: 16px 0;
  ${({h}) => h ? `
    height: ${h};
  `:`
    height: calc(100vh - 260px);
  `}
`;