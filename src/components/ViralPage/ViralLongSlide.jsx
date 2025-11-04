// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import ViralLong from '../../assets/ViralLong';

// const ViralLongSlide = () => {
//     const sliderRef = useRef(null);
//     const tl = useRef(null);

//     useEffect(() => {
//         const slider = sliderRef.current;
//         const items = Array.from(slider.children);
//         const originalCount = items.length;

//         const itemWidth = items[0].offsetWidth + 30;

//         while (slider.children.length > originalCount) {
//             slider.removeChild(slider.lastChild);
//         }

//         for (let i = originalCount - 1; i >= 0; i--) {
//             const clone = items[i].cloneNode(true);
//             slider.insertBefore(clone, slider.firstChild);
//         }

//         for (let i = 0; i < originalCount; i++) {
//             const clone = items[i].cloneNode(true);
//             slider.appendChild(clone);
//         }

//         const totalCount = slider.children.length;
//         slider.style.width = `${itemWidth * totalCount}px`;

//         gsap.set(slider, { x: -itemWidth * originalCount });

//         tl.current = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

//         tl.current.to(slider, {
//             x: 0,
//             duration: 20,
//             onComplete: () => {
//                 gsap.set(slider, { x: -itemWidth * originalCount });
//             },
//         });

//         const handleEnter = () => tl.current.pause();
//         const handleLeave = () => tl.current.resume();

//         slider.addEventListener('mouseenter', handleEnter);
//         slider.addEventListener('mouseleave', handleLeave);

//         return () => {
//             tl.current.kill();
//             slider.removeEventListener('mouseenter', handleEnter);
//             slider.removeEventListener('mouseleave', handleLeave);
//         };
//     }, []);

//     return (
//         <div
//             id="Longbox"
//             style={{
//                 overflow: 'hidden',
//                 width: '100%',
//             }}
//         >
//             <ul
//                 ref={sliderRef}
//                 style={{
//                     display: 'flex',
//                     gap: '10px',
//                     listStyle: 'none',
//                     userSelect: 'none',
//                     padding: 0,
//                     margin: 0,
//                 }}
//             >
//                 {ViralLong.map((src, idx) => (
//                     <li key={idx}>
//                         <a>
//                             <img src={src} alt={`ViralLong-${idx + 1}`} />
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViralLongSlide;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ViralLongSlide = () => {
    return (
        <div id="Longbox" style={{ width: '100%', overflow: 'hidden' }}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 0, // 0으로 하면 완전 부드러운 무한 슬라이드
                    disableOnInteraction: false, // 드래그 후에도 다시 자동 재생
                    reverseDirection: true,
                }}
                speed={4000} // 속도 조절 (값이 높을수록 느리게 이동)
                allowTouchMove={true}
                style={{
                    width: '100%',
                }}
            >
                {ViralLong.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        style={{
                            width: '630px', // 카드 크기 조절
                            flexShrink: 0,
                        }}
                    >
                        <a>
                            <img
                                src={src}
                                alt={`ViralShort-${idx + 1}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',

                                    userSelect: 'none',
                                }}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ViralLongSlide;
