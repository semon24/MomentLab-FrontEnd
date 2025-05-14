import LogoStyles from './logo.module.scss'
import backgroundImg from "../../assets/images/паттерны.svg"

export const Logo = () => {
    return (
        <div>
            <img className={LogoStyles.backgroundImg} src={backgroundImg}/>
            <div className={LogoStyles.logoBlock}>
                <div className={LogoStyles.textLogo}>Момент.лаб</div>
            </div>
        </div>
        
    );
};