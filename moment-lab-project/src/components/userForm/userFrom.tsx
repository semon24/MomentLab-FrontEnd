import UserFormStyle from './userFrom.module.scss'
import { Button } from 'primereact/button'

const UserForm = () => {

    return (
        <div className={UserFormStyle.userFormBlock}>
            <div className={UserFormStyle.middleUserForm}>
                <div className={UserFormStyle.headerUserForm}>
                    <div className={UserFormStyle.headerTextBlack}>
                        Оставь заявку и мы создадим уникальное{' '}
                        <span className={UserFormStyle.headerTextOrandge}>Событие для тебя</span>
                    </div>
                </div>
                <div className={UserFormStyle.userForm}>
                    <input type="text" placeholder="Почта"></input>
                    <input type="text" placeholder="Телефон"></input>
                    <input type="text" placeholder="Имя"></input>
                    <textarea placeholder="Опишите планируемое событие"/>
                    <div className={UserFormStyle.consentProcessingBlock}>
                        
                    </div>
                </div>

                <Button label='Оставить заявку' className={UserFormStyle.sendRequest}/>
            </div>
        </div>
    )
}

export default UserForm