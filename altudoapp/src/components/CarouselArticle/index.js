import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class CarouselArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      Carouselitems: [],
    };
    this.getCarouselItems = this.getCarouselItems.bind(this);
  }
  componentDidMount() {
    this.getCarouselItems();
  }
  getCarouselItems = () => {
    fetch('/altudoapi/GetCarouselArticles')
      .then((result) => result.json())
      .then((res) => {
        this.setState({
          Carouselitems: res,
        });
      });
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
    };
    return (
      <div className="corouselDiv">
        <Slider {...settings}>
          {this.state.Carouselitems.map((item) => (
            <div key={item.CarouselTitle}>
              <img
                className="imgCarousel"
                src={item.CarouselImageUrl}
                alt={item.CarouselName}
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselArticle;
