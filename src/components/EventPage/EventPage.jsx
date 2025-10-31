// src/components/EventPage.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import EventPageData from '../../assets/EventPageData';
// import { EventPageStyle } from './style';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { PiCoffeeBeanFill } from 'react-icons/pi';
// const EventPage = () => {
//     const colsRef = useRef([]);
//     const textRef = useRef(null);
//     const [activeFilter, setActiveFilter] = useState('all');

//     // 컬럼 나누기
//     const columns = [[], []];
//     EventPageData.filter(
//         (item) => activeFilter === 'all' || item.tag.includes(activeFilter)
//     ).forEach((item, idx) => {
//         columns[idx % 2].push(item);
//     });

//     gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {
//         if (textRef.current) {
//             gsap.fromTo(
//                 textRef.current,
//                 { opacity: 0 },
//                 {
//                     opacity: 1,
//                     scrollTrigger: {
//                         trigger: textRef.current.parentElement,
//                         start: 'top 0%',
//                         end: 'bottom 90%',
//                         toggleActions: 'play reverse play reverse',
//                         markers: true,
//                     },
//                 }
//             );
//         }
//     }, []);

//     return (
//         <EventPageStyle>
//             <div className="inner" ref={textRef}>
//                 <div className="text-area">
//                     <h3>
//                         <PiCoffeeBeanFill
//                             size={32}
//                             color="#998A7C"
//                             style={{
//                                 marginRight: '17px',
//                             }}
//                         />
//                         Event details page
//                         <p>이벤트 정보를 직관적으로 전달하기 위해 설계한 상세 페이지입니다.</p>
//                     </h3>
//                     <span>
//                         <img src="/images/Event-page/text.png" alt="" />
//                     </span>
//                 </div>
//             </div>

//             {/* 이미지 컬럼 영역 */}
//             <div className="items-container">
//                 {columns.map((col, colIdx) => (
//                     <div
//                         className="items-col"
//                         key={colIdx}
//                         ref={(el) => (colsRef.current[colIdx] = el)}
//                     >
//                         {col.map((item) => (
//                             <div className="item" key={item.id}>
//                                 <div className="item-img">
//                                     <img src={item.thumbnailImg} alt={item.title} />
//                                 </div>
//                                 <p>{item.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </EventPageStyle>
//     );
// };

// export default EventPage;
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiCoffeeBeanFill } from 'react-icons/pi';
import EventPageData from '../../assets/EventPageData';
import { EventPageStyle } from './style';
import EventModal from './EventModal';

const EventPage = () => {
    const colsRef = useRef([]);
    const textRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const columns = [[], []];
    EventPageData.filter(
        (item) => activeFilter === 'all' || item.tag.includes(activeFilter)
    ).forEach((item, idx) => {
        columns[idx % 2].push(item);
    });

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: textRef.current.parentElement,
                        start: 'top 0%',
                        end: 'bottom 90%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );
        }
    }, []);

    return (
        <EventPageStyle>
            <div className="inner" ref={textRef}>
                <div className="text-area">
                    <h3>
                        <PiCoffeeBeanFill
                            size={32}
                            color="#998A7C"
                            style={{ marginRight: '17px' }}
                        />
                        Event details page
                        <p>이벤트 정보를 직관적으로 전달하기 위해 설계한 상세 페이지입니다.</p>
                    </h3>
                    <span>
                        <img src="/images/Event-page/text.png" alt="" />
                    </span>
                </div>
            </div>

            {/* 이미지 컬럼 영역 */}
            <div className="items-container">
                {columns.map((col, colIdx) => (
                    <div
                        className="items-col"
                        key={colIdx}
                        ref={(el) => (colsRef.current[colIdx] = el)}
                    >
                        {col.map((item) => (
                            <div
                                className="item"
                                key={item.id}
                                onClick={() => setSelectedImage(item.originalImg)}
                            >
                                <div className="item-img">
                                    <img src={item.thumbnailImg} alt={item.title} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* ✅ 클릭 시 모달 표시 */}
            {selectedImage && (
                <EventModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </EventPageStyle>
    );
};

export default EventPage;
