import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../helper/constant';
import CardDebit from './CardDebit';
import SwiperCore,{Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import Spacer from './Spacer';

import 'swiper/components/pagination'

SwiperCore.use([Pagination]);

export default function DebitList() {
  return (
    <Wrapper>
      <div className='list-title'>Rekening Sumber</div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}>
        <SwiperSlide>
          <CardDebit />
        </SwiperSlide>
      </Swiper>
      <Spacer h={12} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 16px;
  background-color: ${COLORS.grey100};
  overflow: hidden;
  -moz-box-shadow:    inset 0 0 10px rgba(0, 0, 0, .2);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, .2);
  box-shadow:         inset 0 0 10px rgba(0, 0, 0, .2);

  

  .list-title{
    font-size: 12px;
    color: ${COLORS.grey500};
    margin-bottom: 8px;
    margin-left: 16px;
  }
`;