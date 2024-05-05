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

  const cardsData = [
    { id:1, price: "349", currency: "USD", videoId: "FH59Huk2n0M?si=s2CIRw7ZZfoRQtoN", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
    { id:2, price: "249", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
    { id:3, price: "149", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" },
    { id:4, price: "99", currency: "USD", title: 'DEEP DIVING INTO INNER MIND', percentage: "20", strikePrice: "400" }
  ];

  return (
    <Slider {...settings}>
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </Slider>
  );
};

export default Carousel;
