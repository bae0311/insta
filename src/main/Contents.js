import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import conTop01 from '../images/con_top01.jpg';
import Icomore from '../images/ico_more.png';
import conImg01 from '../images/con_img01.jpg';
import Icoheart from '../images/ico_heart.png';
import Icomsg from '../images/ico_message.png';
import Icodm from '../images/ico_dm.png';
import Icomark from '../images/ico_mark.png';
import Icoplus from '../images/ico_plus.png';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Contents = () => {
    return(
        <div className="contents">
            <div className="conTop">
                <span className="ct_img"><img src={conTop01} alt="" /></span>
                <span className="ct_tit">instaName</span>
                <a href="#none" className="ico_more"><img src={Icomore} alt="" /></a>
            </div>
            <div className="conImg">
                <Swiper  
                navigation
                pagination>
                    <SwiperSlide><img src={conImg01} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={conImg01} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={conImg01} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="conLink">
                <a href="#none" className="ico_heart"><img src={Icoheart} alt="" /></a>
                <a href="#none" className="ico_msg"><img src={Icomsg} alt="" /></a>
                <a href="#none" className="ico_dm"><img src={Icodm} alt="" /></a>
                <a href="#none" className="ico_mark"><img src={Icomark} alt="" /></a>
            </div>
            <div className="conText">
                <strong>좋아요 14개</strong>
                <p>
                    <span>instaName</span>
                    Like Like LikeLike LikeLike Like Like Like LikeLike LikeLike Like Like Like LikeLikeLikeLik Like LikeLike Like Like Like LikeLikeLikeLik 
                </p>
                <a href="#none" className="comment_view">댓글 1개 보기</a>
            </div> 
            <div className="con_comment">
                <span className="com_img"><img src={conTop01} alt="" /></span>
                <input className="com_txt" placeholder="댓글달기..."/>
                <a href="#none" className="more"><img src={Icoplus} alt="" /></a>
                <p className="com_date">1일 전</p>
            </div>
        </div>
    );
  };
  
  export default Contents;