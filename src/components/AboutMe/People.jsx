// App.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitText from 'gsap/SplitText';
import { PeopleStyle } from './style';

gsap.registerPlugin(ScrollTrigger, SplitText);

const People = () => {
    return (
        <PeopleStyle id="people">
            <section className="outro">
                <div className="inner">
                    <div className="text-box">
                        <p>
                            <img src="/images/Aboutme-image/coffee.png" alt="" />
                        </p>
                        <h4>I hope my creations linger like the aroma of coffee</h4>
                        <h5>내 작품이 커피 향처럼 오래 머물기를 바랍니다.</h5>
                        <span>© 2025 Kangmiseon. All rights reserved.</span>
                    </div>
                </div>
            </section>
        </PeopleStyle>
    );
};

export default People;
