import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FirstPage, Overlay } from './style';
import Intro from './Intro'; // 다음 컴포넌트 import

const Intro0 = () => {
    // const overlayRef = useRef(null);
    // const [showNext, setShowNext] = useState(false);

    // const handleNext = () => {
    //     const overlay = overlayRef.current;

    //     // 초기 상태 설정
    //     gsap.set(overlay, {
    //         clipPath: 'polygon(49.75% 0%, 50.25% 0%, 50.25% 100%, 49.75% 100%)',
    //         opacity: 1,
    //         pointerEvents: 'all',
    //     });

    //     // 가운데에서 양쪽으로 펼쳐지는 애니메이션
    //     gsap.to(overlay, {
    //         duration: 1,
    //         ease: 'power3.inOut',
    //         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //         onComplete: () => setShowNext(true),
    //     });
    // };

    // // 🔽 다음 페이지로 넘어가면 Intro 컴포넌트 렌더링
    // if (showNext) return <Intro />;

    return (
        <FirstPage>
            <ul className="text">
                <li>A Cup of Code</li>
                <li>A Cup of Code</li>
                <li>A Cup of Code</li>
                <li>A Cup of Code</li>
            </ul>
            <div className="coffee">
                <img src="/images/Intro-image/coffee.png" alt="Coffee" />
            </div>

            <button className="next-btn">Next</button>

            <Overlay />
        </FirstPage>
    );
};

export default Intro0;
