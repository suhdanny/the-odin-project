import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function BestSlide() {
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	return (
		<Slider {...settings}>
			<BestImage id={1} />
			<BestImage id={2} />
			<BestImage id={3} />
			<BestImage id={4} />
			<BestImage id={5} />
			<BestImage id={6} />
			<BestImage id={7} />
			<BestImage id={8} />
			<BestImage id={9} />
			<BestImage id={10} />
		</Slider>
	);
}

function BestImage({ id }) {
	return (
		<div
			key={id}
			className='bg-contain bg-no-repeat bg-center relative m-5'
			style={{ backgroundImage: `url(images/best-${id}.jpeg)`, height: 300 }}>
			<h1 className='absolute left-12 top-3 text-3xl text-red-400 font-bold'>{id}</h1>
		</div>
	);
}

export default BestSlide;
