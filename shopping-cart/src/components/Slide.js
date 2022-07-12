import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from './Image';

function Slide() {
	const settings = {
		dots: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};
	return (
		<Slider {...settings}>
			<Image src={1} quote='fashion in part of daily air' />
			<Image src={2} quote='don"t be into trends' />
			<Image src={3} quote='one is never dressed or underdressed' />
			<Image src={4} quote='what you wear is how you present yourself to the world' />
		</Slider>
	);
}

export default Slide;
