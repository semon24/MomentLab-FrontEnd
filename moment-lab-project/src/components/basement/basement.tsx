import BasementStyle from './basement.module.scss'
import iconsSrc from '../../assets/images/иконки соц сети.svg'
import locationSrc from '../../assets/images/location.svg'

const Basement = () => {
    return (
        <div>
            <div className={BasementStyle.basementBlock}>
                <div className={BasementStyle.leftBlock}>
                    <label className={BasementStyle.textMomentLab}>Момент.Лаб</label>
                    <label className={BasementStyle.text}>Событие со смыслом</label>
                </div>
                <div className={BasementStyle.middleBlock}>
                    <div className={BasementStyle.middleText}>
                        <div className={BasementStyle.text1}>Квесты живого действия</div>
                        <div className={BasementStyle.text1}>Игры полного погружения</div>
                    </div>
                    <div className={BasementStyle.middleText}>
                        <div className={BasementStyle.text1}>Креативные командные тренинги</div>
                        <div className={BasementStyle.text1}>Развлекательные игры</div>
                    </div>
                    <div className={BasementStyle.middleText}>
                        <div className={BasementStyle.text1}>Разумные игры<br /></div>
                        <div className={BasementStyle.text1}>Аренда помещений</div>
                    </div>
                </div>
                <div className={BasementStyle.rightBlock}>
                    <div className={BasementStyle.textNumber}>+7 (963)-040-28-28<br /></div>
                    <img src={iconsSrc} className={BasementStyle.iconsImg}/>
                </div>
            </div>
            <div className={BasementStyle.underBasementBlock}>
                <img src={locationSrc} className={BasementStyle.locationImg}/>
                <div>г.Березовский,ул.Кольцевая, 2В/6</div>
            </div>
        </div>
        
        
    )
}

export default Basement