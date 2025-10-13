import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SkillList from '../../assets/SkillList.js';

const SkillSlide = () => {
    const sliderRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const items = Array.from(slider.children);
        const originalCount = items.length;

        const itemWidth = items[0].offsetWidth; // 여백 제거
        const totalWidth = itemWidth * originalCount;

        // 아이템 복제
        for (let i = 0; i < originalCount; i++) {
            const clone = items[i].cloneNode(true);
            slider.appendChild(clone);
        }

        // 전체 너비 설정
        slider.style.width = `${itemWidth * slider.children.length}px`;

        // 초기 위치
        gsap.set(slider, { x: 0 });

        // 무한 루프 애니메이션
        tl.current = gsap.to(slider, {
            x: -totalWidth,
            duration: 30,
            ease: 'linear',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

        // 마우스 hover 시 멈춤
        const handleEnter = () => tl.current.pause();
        const handleLeave = () => tl.current.resume();

        slider.addEventListener('mouseenter', handleEnter);
        slider.addEventListener('mouseleave', handleLeave);

        return () => {
            tl.current.kill();
            slider.removeEventListener('mouseenter', handleEnter);
            slider.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <div
            id="SkillBox"
            style={{
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <ul
                ref={sliderRef}
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    userSelect: 'none',
                    padding: 0,
                    margin: 0,
                }}
            >
                {SkillList.map((src, idx) => (
                    <li key={idx}>
                        <a>
                            <img src={src} alt={`Skill-${idx + 1}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillSlide;
