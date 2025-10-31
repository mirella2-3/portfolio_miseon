import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EventModal = ({ image, onClose }) => {
    const modalRef = useRef(null);

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
        if (modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }
            );
        }
    }, [image]);

    // if (!image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-image-wrap" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <img src={image} alt="event-original" />
            </div>
        </div>
    );
};

export default EventModal;
