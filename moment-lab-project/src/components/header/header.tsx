import HeaderStyles from './header.module.scss'
import contactsSrc from "../../assets/images/contactsUp.svg"
import { Button } from 'primereact/button';

export const Header = () => {
    return (
        <div className={HeaderStyles.mainHeaderBlock}>
            <Button 
                outlined
                icon="pi pi-bars"
                className={HeaderStyles.buttonChoice}
                />
            <Button label='момент.лаб' className={HeaderStyles.buttonHeader}/>
            <img className={HeaderStyles.contactImg} src={contactsSrc}/>  
        </div>
    );
};