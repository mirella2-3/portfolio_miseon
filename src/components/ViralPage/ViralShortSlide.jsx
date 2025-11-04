// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ViralShort from '../../assets/ViralShort';

// const ViralShortSlide = () => {
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

//         gsap.set(slider, { x: 0 });

//         tl.current = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

//         tl.current.to(slider, {
//             x: -itemWidth * originalCount,
//             duration: 40,
//             onComplete: () => {
//                 gsap.set(slider, { x: 0 });
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
//             id="box"
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
//                 {ViralShort.map((src, idx) => (
//                     <li key={idx}>
//                         <a>
//                             <img src={src} alt={`ViralShort-${idx + 1}`} />
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViralShortSlide;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ViralShort from '../../assets/ViralShort';

const ViralShortSlide = () => {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 0, // 0으로 하면 완전 부드러운 무한 슬라이드
                    disableOnInteraction: false, // 드래그 후에도 다시 자동 재생
                }}
                speed={4000} // 속도 조절 (값이 높을수록 느리게 이동)
                allowTouchMove={true}
                style={{
                    width: '100%',
                }}
            >
                {ViralShort.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        style={{
                            width: '310px', // 카드 크기 조절
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

export default ViralShortSlide;
