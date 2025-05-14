import HeaderStyles from './header.module.scss'
import HeaderSrc from "../../assets/images/лого.svg"
import iconButtonSrc from "../../assets/images/Vector.svg"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={HeaderStyles.mainHeaderBlock}>
            <button className={HeaderStyles.buttonChoice}>
                <img src={iconButtonSrc} className={HeaderStyles.iconButton} />
            </button>

            <Link to="/" className={HeaderStyles.buttonHeader}>
                <img src={HeaderSrc} className={HeaderStyles.headerIcon}/>
            </Link>
        </div>
    );
};