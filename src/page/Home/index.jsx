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
import Intro0 from '../../components/Home/Intro0';
import People from '../../components/AboutMe/People';
import TextPage2 from '../../components/TextPage/TextPage2';

const Home = () => {
    return (
        <HomeStyle>
            {/* <Intro0 />
            <Intro /> */}
            <section id="Profile">
                <ProfilePage />
            </section>
            <SkillPage />
            <section id="Projects">
                <TextPage />
            </section>
            <WorkGallery />
            <section id="works">
                <TextPage2 />
            </section>
            <EventPage />
            <PopupPage />
            <ViralPage />
            <PortraitPage />
            <People />
        </HomeStyle>
    );
};

export default Home;
