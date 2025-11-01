import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { EventModalStyle } from './style';

const EventModal = ({ image, onClose }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // 모달 등장 애니메이션
    useEffect(() => {
        if (modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }
            );
        }
    }, [image]);

    // 바깥 스크롤 막기
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    // Portal로 body 직속 렌더링
    return createPortal(
        <EventModalStyle className="modal-overlay" onClick={onClose}>
            <div className="modal-image-wrap" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <div
                    className="modal-content"
                    ref={contentRef}
                    onWheel={(e) => {
                        e.stopPropagation();
                        const el = contentRef.current;
                        if (!el) return;

                        const delta = e.deltaY;
                        const atTop = el.scrollTop === 0;
                        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

                        if ((delta < 0 && atTop) || (delta > 0 && atBottom)) {
                            e.preventDefault(); // 바깥 스크롤 막기
                        } else {
                            el.scrollTop += delta; // 모달 안 스크롤
                            e.preventDefault();
                        }
                    }}
                >
                    <img src={image} alt="event-original" />
                </div>
            </div>
        </EventModalStyle>,
        document.body
    );
};

export default EventModal;
