import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EventModaltyle } from './style';

const EventModal = ({ image, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }
            );
        }
    }, [image]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, []);

    return (
        <EventModaltyle className="modal-overlay" onClick={onClose}>
            <div className="modal-image-wrap" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <img src={image} alt="event-original" />
                </div>
            </div>
        </EventModaltyle>
    );
};

export default EventModal;
