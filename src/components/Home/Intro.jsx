import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { IntroStyle } from './style';
import { PiCoffeeBeanFill } from 'react-icons/pi';
import ScrollIndicator from '../Ui/ScrollIndicator';

const Intro = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            containerRef.current,
            {
                clipPath: 'inset(0 50% 0 50%)',
            },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power3.inOut',
            }
        );

        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const smoothStep = (p) => p * p * (3 - 2 * p);

        if (window.innerWidth > 1000) {
            ScrollTrigger.create({
                trigger: '.con1',
                start: 'top top',
                end: '75% top',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    const con1CardsContainerOpacity = gsap.utils.interpolate(
                        1,
                        0.5,
                        smoothStep(progress)
                    );
                    gsap.set('.con1-cards', {
                        opacity: con1CardsContainerOpacity,
                    });

                    ['#con1-card-1', '#con1-card-2', '#con1-card-3'].forEach((cardId, index) => {
                        const delay = index * 0.9;
                        const cardProgress = gsap.utils.clamp(
                            0,
                            1,
                            (progress - delay * 0.1) / (1 - delay * 0.1)
                        );

                        const y = gsap.utils.interpolate('0%', '350%', smoothStep(cardProgress));
                        const scale = gsap.utils.interpolate(1, 0.75, smoothStep(cardProgress));

                        let x = '0%';
                        let rotation = 0;
                        if (index === 0) {
                            x = gsap.utils.interpolate('0%', '90%', smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, -15, smoothStep(cardProgress));
                        } else if (index === 2) {
                            x = gsap.utils.interpolate('0%', '-90%', smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, 15, smoothStep(cardProgress));
                        }

                        gsap.set(cardId, {
                            y,
                            x,
                            rotation,
                            scale,
                        });
                    });
                },
            });

            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top top',
                end: `+=${window.innerHeight * 4}px`,
                pin: '.con3',
                pinSpacing: true,
            });

            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top top',
                end: `+=${window.innerHeight * 4}px`,
                onLeave: () => {
                    const con3Section = document.querySelector('.con3');
                    const con3Rect = con3Section.getBoundingClientRect();
                    const con3Top = window.pageYOffset + con3Rect.top;

                    gsap.set('.cards', {
                        position: 'absolute',
                        top: con3Top,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                    });
                },
                onEnterBack: () => {
                    gsap.set('.cards', {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                    });
                },
            });

            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top bottom',
                end: `+=${window.innerHeight * 4}`,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
                    const headerY = gsap.utils.interpolate(
                        '400%',
                        '0%',
                        smoothStep(headerProgress)
                    );
                    gsap.set('.con3-header', { y: headerY });

                    ['#card-1', '#card-2', '#card-3'].forEach((cardId, index) => {
                        const delay = index * 0.5;
                        const cardProgress = gsap.utils.clamp(
                            0,
                            1,
                            (progress - delay * 0.1) / (0.9 - delay * 0.1)
                        );

                        const innerCard = document.querySelector(`${cardId} .flip-card-inner`);

                        let y;
                        if (cardProgress < 0.4) {
                            const normalizedProgress = cardProgress / 0.4;
                            y = gsap.utils.interpolate(
                                '-100%',
                                '50%',
                                smoothStep(normalizedProgress)
                            );
                        } else if (cardProgress < 0.6) {
                            const normalizedProgress = (cardProgress - 0.4) / 0.2;
                            y = gsap.utils.interpolate('50%', '0%', smoothStep(normalizedProgress));
                        } else {
                            y = '0%';
                        }

                        let scale;
                        if (cardProgress < 0.4) {
                            const normalizedProgress = cardProgress / 0.4;
                            scale = gsap.utils.interpolate(
                                0.25,
                                0.75,
                                smoothStep(normalizedProgress)
                            );
                        } else if (cardProgress < 0.6) {
                            const normalizedProgress = (cardProgress - 0.4) / 0.2;
                            scale = gsap.utils.interpolate(0.75, 1, smoothStep(normalizedProgress));
                        } else {
                            scale = 1;
                        }

                        let opacity;
                        if (cardProgress < 0.2) {
                            const normalizedProgress = cardProgress / 0.2;
                            opacity = smoothStep(normalizedProgress);
                        } else {
                            opacity = 1;
                        }

                        let x, rotate, rotationY;
                        if (cardProgress < 0.6) {
                            x = index === 0 ? '100%' : index === 1 ? '0%' : '-100%';
                            rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
                            rotationY = 0;
                        } else if (cardProgress < 1) {
                            const normalizedProgress = (cardProgress - 0.6) / 0.4;
                            x = gsap.utils.interpolate(
                                index === 0 ? '100%' : index === 1 ? '0%' : '-100%',
                                '0%',
                                smoothStep(normalizedProgress)
                            );
                            rotate = gsap.utils.interpolate(
                                index === 0 ? -5 : index === 1 ? 0 : 5,
                                0,
                                smoothStep(normalizedProgress)
                            );
                            rotationY = smoothStep(normalizedProgress) * 180;
                        } else {
                            x = '0%';
                            rotate = 0;
                            rotationY = 180;
                        }

                        gsap.set(cardId, { opacity, y, x, rotate, scale });
                        gsap.set(innerCard, { rotationY });
                    });
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <IntroStyle ref={containerRef} className="portfolio">
            <section className="con1">
                <ScrollIndicator />
                <div className="con1-cards">
                    <div className="card" id="con1-card-1"></div>
                    <div className="card" id="con1-card-2"></div>
                    <div className="card" id="con1-card-3"></div>
                </div>
            </section>

            <section className="con2">
                <div className="text-wrapper">
                    <h1>
                        <PiCoffeeBeanFill
                            size={50}
                            color="#998A7C"
                            style={{ marginRight: '17px' }}
                            className="icon"
                        />
                        Wake Up with Design
                    </h1>
                    <p>디자인으로 시작하는 하루</p>
                </div>
            </section>

            <section className="con3"></section>

            <section className="cards">
                <div className="cards-container">
                    {['Profile ', 'Projects', 'About Me'].map((title, idx) => (
                        <div className="card" id={`card-${idx + 1}`} key={idx}>
                            <div className="card-wrapper">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front"></div>
                                    <div className="flip-card-back">
                                        <div className="card-title">
                                            <p>{`0${idx + 1}`}</p>
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </IntroStyle>
    );
};

export default Intro;
