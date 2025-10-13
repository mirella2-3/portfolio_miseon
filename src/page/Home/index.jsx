import CardIndex from '../../components/Home/CardIndex';
import EndPage from '../../components/EndPage/EndPage';
import PopupPage from '../../components/PopupPage/PopupPage';
import PortraitPage from '../../components/PortraitPage/PortraitPage';
import ViralPage from '../../components/ViralPage/ViralPage';
import EventPage from '../../components/EventPage/EventPage';
import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';

const Home = () => {
    return (
        <>
            <CardIndex />
            <SkillPage />
            <TextPage />
            <EventPage />
            <PopupPage />
            <ViralPage />
            <PortraitPage />
            <EndPage />
        </>
    );
};

export default Home;
