import React, { useEffect } from 'react';
import gsap from 'gsap';

const EventModal = ({ image, onClose }) => {
    // ESC 키로 닫기
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // GSAP 등장 애니메이션
    useEffect(() => {
        if (image) {
            gsap.fromTo(
                '.modal-content',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
            );
        }
    }, [image]);

    if (!image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <img src={image} alt="event-original" />
            </div>
        </div>
    );
};

export default EventModal;
