import ourTaskStyles from "./ourTasks.module.scss"
import notebookSrc from "../../assets/images/задач+2.svg"
import splineSrc from "../../assets/images/Spline - 07.svg"

export const OurTasks = () => {
    return (
        <div className={ourTaskStyles.mainBlock}>
            <div className={ourTaskStyles.headerText}>Наша задача #1</div>
            <div className={ourTaskStyles.notebookBlock}>
                <img className={ourTaskStyles.notebookImg} src={notebookSrc} />
            </div>  
            <img className={ourTaskStyles.splineImg} src={splineSrc}/>
        </div>
    )
}