import EventsStyles from "./eventsWithMeaning.module.scss"
import { Link } from "react-router-dom"

export const EventsWithMeaning = () => {
    return (
        <div className={EventsStyles.mainBlock}>
            <div className={EventsStyles.mainText}>Создаем события со смыслом</div>
            <div className={EventsStyles.descriptionText}> Наша суперсила - уникальные события, от которых <br/>бегут&#8194;
                <Link to="/" className={EventsStyles.murashkiButton}>мурашки</Link>
            </div>
        </div>
    )
}