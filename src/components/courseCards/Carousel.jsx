import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      <Card price="$349" currency="USD"  videoId="FH59Huk2n0M?si=s2CIRw7ZZfoRQtoN" title='DEEP DIVING INTO INNER MIND' percentage="20" strikePrice="$400"/>
      <Card price="$249" currency="USD" title='DEEP DIVING INTO INNER MIND' percentage="20" strikePrice="$400"/>
      <Card price="$149" currency="USD" title='DEEP DIVING INTO INNER MIND' percentage="20" strikePrice="$400"/>
      <Card price="$99" currency="USD" title='DEEP DIVING INTO INNER MIND' percentage="20" strikePrice="$400"/>
    </Slider>
  );
};

export default Carousel;
