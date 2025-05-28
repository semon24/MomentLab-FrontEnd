import OurSolutionsStyle from './ourSolutions.module.scss'
import { Button } from 'primereact/button';
import fonImgSrc from '../../assets/images/patternDown.svg'
import pointerImgSrc from '../../assets/images/стрелка.svg'
import { HiArrowLongRight } from "react-icons/hi2";
import part1Src from "../../assets/images/сердечки.svg"
import part2Src from "../../assets/images/спиралька.svg"
import photoSrc from "../../assets/images/photo.svg"


const OurSolutions = () => {
    return (
        <div>
            <div className={OurSolutionsStyle.solutionBlock}>
                <img className={OurSolutionsStyle.fonImg} src={fonImgSrc}/>
                <div className={OurSolutionsStyle.middleSolutionBlock}>
                    <div className={OurSolutionsStyle.solutionHead}>
                        <div className={OurSolutionsStyle.textOurSolutions}>Наши решения
                            <img className={OurSolutionsStyle.pointerImg} src={pointerImgSrc}/>
                        </div>
                        <Button 
                            label='Все решения' 
                            className={OurSolutionsStyle.buttonAllSolutions}
                            >
                                <HiArrowLongRight className={OurSolutionsStyle.imgArrow}/>
                        </Button>
                    </div>
                    <div className={OurSolutionsStyle.listSolutions}>
                        <div className={OurSolutionsStyle.firstCards}>
                            <img src={part1Src} className={OurSolutionsStyle.particleFirst}/>
                            <div className={OurSolutionsStyle.photoBlock}>
                                <img src={photoSrc}/>
                                <div className={OurSolutionsStyle.firstTextNameEvent}>Квесты живого действия</div>
                                <div className={OurSolutionsStyle.firstTextDescriptionEvent}>(логика x задача + актер)</div>
                            </div>
                            <Button className={OurSolutionsStyle.buttonCards}>
                                <HiArrowLongRight className={OurSolutionsStyle.imgArrowPhoto}/>
                            </Button>
                        </div>
                        <div className={OurSolutionsStyle.secondCards}>
                            <img src={part2Src} className={OurSolutionsStyle.particleSecond}/>
                            <div className={OurSolutionsStyle.photoBlock}>
                                <img src={photoSrc}/>
                                <div className={OurSolutionsStyle.secondTextNameEvent}>Креативные командные мероприятия</div>
                                <div className={OurSolutionsStyle.secondTextDescriptionEvent}>(смекалка + креатив) x команда</div>
                            </div>
                            <Button className={OurSolutionsStyle.buttonCards}>
                                <HiArrowLongRight className={OurSolutionsStyle.imgArrowPhoto}/>
                            </Button>
                        </div>
                        <div className={OurSolutionsStyle.firstCards}>
                            <img src={part1Src} className={OurSolutionsStyle.particleFirst}/>
                            <div className={OurSolutionsStyle.photoBlock}>
                                <img src={photoSrc}/>
                                <div className={OurSolutionsStyle.firstTextNameEvent}>Квесты живого действия</div>
                                <div className={OurSolutionsStyle.firstTextDescriptionEvent}>(логика x задача + актер)</div>
                            </div>
                            <Button className={OurSolutionsStyle.buttonCards}>
                                <HiArrowLongRight className={OurSolutionsStyle.imgArrowPhoto}/>
                            </Button>
                        </div>
                        <div className={OurSolutionsStyle.secondCards}>
                            <img src={part2Src} className={OurSolutionsStyle.particleSecond}/>
                            <div className={OurSolutionsStyle.photoBlock}>
                                <img src={photoSrc}/>
                                <div className={OurSolutionsStyle.secondTextNameEvent}>Креативные командные мероприятия</div>
                                <div className={OurSolutionsStyle.secondTextDescriptionEvent}>(смекалка + креатив) x команда</div>
                            </div>
                            <Button className={OurSolutionsStyle.buttonCards}>
                                <HiArrowLongRight className={OurSolutionsStyle.imgArrowPhoto}/>
                            </Button>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default OurSolutions