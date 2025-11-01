import PopupPage from '../../components/PopupPage/PopupPage';
import PortraitPage from '../../components/PortraitPage/PortraitPage';
import ViralPage from '../../components/ViralPage/ViralPage';
import EventPage from '../../components/EventPage/EventPage';
import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import { HomeStyle } from './style';
import Intro from '../../components/Home/Intro';
import People from '../../components/AboutMe/People';
import TextPage2 from '../../components/TextPage/TextPage2';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const { setShowHeader, setCurrentSection } = useOutletContext();

    useEffect(() => {
        const handleScroll = () => {
            const intro = document.querySelector('section#Intro');
            const profile = document.querySelector('section#Profile');
            const projects = document.querySelector('section#Projects');
            const Works = document.querySelector('section#Works');

            const scrollY = window.scrollY;
            const offset = 100; // 조금 빨리 바뀌게 하는 여유값

            if (intro && scrollY < intro.offsetHeight - offset) {
                setShowHeader(false);
                setCurrentSection('');
            } else {
                setShowHeader(true);

                if (profile && scrollY < profile.offsetTop + profile.offsetHeight - offset) {
                    setCurrentSection('Profile');
                } else if (
                    projects &&
                    scrollY < projects.offsetTop + projects.offsetHeight - offset
                ) {
                    setCurrentSection('Projects');
                } else if (Works) {
                    setCurrentSection('Works');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 상태 확인

        return () => window.removeEventListener('scroll', handleScroll);
    }, [setShowHeader, setCurrentSection]);

    return (
        <HomeStyle>
            <section id="Intro">
                <Intro />
            </section>
            <section id="Profile">
                <ProfilePage /> <SkillPage />
            </section>

            <section id="Projects">
                <TextPage /> <WorkGallery />
            </section>

            <section id="Works">
                <TextPage2 /> <EventPage />
                <PopupPage />
                <ViralPage />
                <PortraitPage />
            </section>

            <People />
        </HomeStyle>
    );
};

export default Home;
