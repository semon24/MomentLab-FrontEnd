import ReasonsOfMeetingsStyle from "./reasonsOfMeetings.module.scss"
import leftUpSrc from "../../assets/images/luVector.svg"
import leftDownSrc from "../../assets/images/ldVector.svg"
import RightUpSrc from "../../assets/images/ruVector.svg"
import RightDownSrc from "../../assets/images/rdVector.svg"


export const ReasonsOfMeetings = () => {
    return (
        <div className={ReasonsOfMeetingsStyle.reasonMainBlock}>
            <div className={ReasonsOfMeetingsStyle.reasonText}>Поводы для встреч</div>
            <div className={ReasonsOfMeetingsStyle.reasonDescriptionBlock}>

                <div className={ReasonsOfMeetingsStyle.leftBlock}>
                    <div className={ReasonsOfMeetingsStyle.leftUpBlock}>
                        <div className={ReasonsOfMeetingsStyle.textMain}>Развиваем корпоративную культуру</div>
                        <ul className={ReasonsOfMeetingsStyle.descriptionTextMain}>
                            <li>Тимбилдинги</li>
                            <li>Календарные праздники</li>
                            <li>Семинары, конференции</li>
                            <li>Бизнес-игры</li>
                            <li>Годовая программа роста команды</li>
                        </ul>
                        <img className={ReasonsOfMeetingsStyle.leftUpImage} src={leftUpSrc}/>
                    </div>

                    <div className={ReasonsOfMeetingsStyle.leftDownBlock}>
                        <div className={ReasonsOfMeetingsStyle.textMain}>Лофт площадка</div>
                        <ul className={ReasonsOfMeetingsStyle.descriptionTextMain}>
                            <li>Многофункциональный лофт, подходящий для организации вашего мероприятия</li>
                        </ul>
                        <img className={ReasonsOfMeetingsStyle.leftDownImage} src={leftDownSrc}/>
                    </div>
                </div>

                <div className={ReasonsOfMeetingsStyle.rightBlock}>
                    <div className={ReasonsOfMeetingsStyle.rightUpBlock}>
                        <div className={ReasonsOfMeetingsStyle.textMain}>Воплощаем идеи частных мероприятий</div>
                        <ul className={ReasonsOfMeetingsStyle.descriptionTextMain}>
                            <li>Дни рождения</li>
                            <li>Вечеринки</li>
                            <li>Нешаблонные свадьбы</li>
                        </ul>
                        <img className={ReasonsOfMeetingsStyle.rightUpImage} src={RightUpSrc}/>
                    </div>

                    <div className={ReasonsOfMeetingsStyle.rightDownBlock}>
                        <div className={ReasonsOfMeetingsStyle.textMain}>Формируем осмысленные<br/>события в школе</div>
                        <ul className={ReasonsOfMeetingsStyle.descriptionTextMain}>
                            <li>Окончание года</li>
                            <li>Последние звонки и выпускные</li>
                            <li>Тематические экскурсии для родителей и детей</li>
                            <li>Тренинги</li>
                        </ul>
                        <img className={ReasonsOfMeetingsStyle.rightDownImage} src={RightDownSrc}/>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}