import React, { useState } from 'react';
import RetouchingData from '../../assets/RetouchingData';
import { PiCoffeeBeanFill } from 'react-icons/pi';
import { PortraitPageStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PortraitPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // 메인 이미지: hover 시 before, 기본은 after
    const mainImage = isHovered
        ? RetouchingData[selectedIndex].before
        : RetouchingData[selectedIndex].after;

    return (
        <PortraitPageStyle className="portrait-page-container">
            <div className="left">
                <div className="text-area2">
                    <h3>
                        <PiCoffeeBeanFill
                            size={40}
                            color="#998A7C"
                            style={{ marginRight: '17px' }}
                        />
                        Photo retouching
                    </h3>
                    <p>이미지 위로 마우스를 올리면 보정 전 사진을 확인할 수 있습니다.</p>
                </div>

                <div className="thumbnailWrap">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        slideToClickedSlide={true}
                        loop={true}
                        centeredSlides={true}
                        onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
                    >
                        {RetouchingData.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img.after}
                                    alt={`thumb-${idx}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setSelectedIndex(idx)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="main-bg">
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `url(${RetouchingData[selectedIndex].after})`,
                    }}
                />

                <div
                    className="main-image"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src={mainImage} alt="main" />
                </div>
            </div>
        </PortraitPageStyle>
    );
};

export default PortraitPage;
