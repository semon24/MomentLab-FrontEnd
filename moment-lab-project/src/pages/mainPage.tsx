import { Header } from "../components/header/header";
import {Logo} from "../components/logo/logo"
import {EventsWithMeaning} from "../components/eventsWithMeaning/eventsWithMeaning"
import { OurTasks } from "../components/ourTasks/ourTasks";
import {ReasonsOfMeetings} from "../components/reasonsOfMeetings/reasonsOfMeetings"

export const MainPage = () => {
    return (
        <div>
            <Header/>
            <Logo/>
            <EventsWithMeaning/>
            <OurTasks/>
            <ReasonsOfMeetings/>
        </div>
    );
};