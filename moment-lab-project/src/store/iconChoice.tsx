import icon1 from '../assets/images/Vector.svg'
import icon2 from '../assets/images/Vector2.svg'
import { createSlice } from '@reduxjs/toolkit'


interface IconState {
    src: string        // в src будем хранить путь к текущему SVG
}

const initialState: IconState = {
    src: icon1
}

const iconSlice = createSlice({
    name: 'icon',      // 5.1 имя слайса — префикс для экшен-типов
    initialState,      // 5.2 стартовое состояние
    reducers: {        // 5.3 сами «редьюсеры» (функции, меняющие state)
      // 5.3.1 переключатель: если src = icon1, ставим icon2, иначе обратно
      toggleIcon(state) {
        state.src = state.src === icon1 ? icon2 : icon1
      },
      // 5.3.2 (опционально) выставить конкретную иконку
      setIcon(state, action: { payload: string }) {
        state.src = action.payload
      }
    }
  })

  export const { toggleIcon, setIcon } = iconSlice.actions
  export default iconSlice.reducer