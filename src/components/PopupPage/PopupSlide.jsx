import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PopupSmall from '../../assets/PopupSmall';
import PopupBig from '../../assets/PopupBig';

const PopupSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const bigSwiperRef = useRef(null);
    useEffect(() => {
        if (bigSwiperRef.current) {
            bigSwiperRef.current.slideToLoop(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div className="swiperWrap">
            <Swiper
                className="popup-small-swiper"
                loop={true}
                centeredSlides={true}
                slideToClickedSlide={true}
                slidesPerView="auto"
                spaceBetween={11}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {PopupSmall.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="slide-content">
                            <img src={src} alt={`popup-${i + 1}`} className="popup-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <p className="iPhoneImg">
                <img src="/images/popup-image/iPhone.png" alt="" />
            </p>

            <Swiper
                className="popup-big-swiper"
                onSwiper={(swiper) => {
                    bigSwiperRef.current = swiper;
                }}
                slidesPerView={1}
                allowTouchMove={false}
                loop={true}
            >
                {PopupBig.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="big-slide-content">
                            <img src={src} alt={`big-popup-${i + 1}`} className="big-popup-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopupSlide;
