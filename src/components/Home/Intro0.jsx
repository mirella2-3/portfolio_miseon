import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FirstPage, Overlay } from './style';
import Intro from './Intro';

const Intro0 = () => {
    return (
        <FirstPage>
            <ul className="text">
                <li>A Cup of Design</li>
                <li>A Cup of Design</li>
                <li>A Cup of Design</li>
                <li>A Cup of Design</li>
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
