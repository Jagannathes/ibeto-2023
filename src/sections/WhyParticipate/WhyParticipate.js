import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";
import {whyParticipateData} from '../../data/whyParticipateData'
import WhyParticipateCard from "./WhyParticipateCard";
import ellipse1 from "../../assets/svg/Ellipse8.svg";
import ellipse2 from "../../assets/svg/Ellipse10.svg";

import whyParticipate from '../../assets/svg/whyParticipate.svg'
import "./WhyParticipate.css";
import Aos from "aos";

const WhyParticipate = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    arrows: true,
    draggable: false,
    swipeToSlide: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const mobileView = useMediaQuery("(max-width:1400px)");
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="whyParticipate" id="whyParticipate">
      <div className="whyParticipate__container" data-aos="zoom-in">
        {mobileView || (
          <div className="wpC__left">
            <img src={whyParticipate} alt="" className="whyParticipate_img"/>
          </div>
        )}
        <div className="wpC__right">
          <h2 className="ps__header">Why Participate?</h2>
          {mobileView && (
              <img src={whyParticipate} alt="" className="whyParticipate_img"/>
          )}
          <img className="ellipse el_1" src={ellipse1} alt="" />
          <img className="ellipse el_2" src={ellipse2} alt="" />
          <img className="ellipse el_3" src={ellipse2} alt="" />
          <div className="wpC_slider">
            <IoIosArrowUp className="slider__arrow" onClick={gotoNext} />
            <Slider {...settings} ref={sliderRef} className="wpcSlider">
              {whyParticipateData.map((ypData)=>{
                return(
                  <div key={ypData.id}>
                  <WhyParticipateCard content={ypData.content} />
                </div>
                )
              })}
              

              
            </Slider>
            <IoIosArrowDown className="slider__arrow" onClick={gotoPrev} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyParticipate;
