import { SORT_PLAYLIST } from '../constants'

const defaultSortState = {
  performer: 'sort',
  song: 'sort',
  genre: 'sort',
  year: 'sort',
}
export default (sortState = defaultSortState, action) => {
  const { type, payload } = action

  switch (type) {
    //установка значений сортировки
    //sort - не сортируем
    //sort-up - сортируем по возростанию
    //sort-down - сортируем по убыванию
    case SORT_PLAYLIST:
      const newSortState = sortState
      for (let key in newSortState) {
        if (newSortState[key] === newSortState[payload.column]) {
          continue
        } else {
          newSortState[key] = 'sort'
        }
      }

      //смена значений при первом и повторных кликах
      if (newSortState[payload.column] === 'sort')
        newSortState[payload.column] = 'sort-up'
      else if (newSortState[payload.column] === 'sort-up')
        newSortState[payload.column] = 'sort-down'
      else if (newSortState[payload.column] === 'sort-down')
        newSortState[payload.column] = 'sort-up'

      return { ...newSortState }

    default:
      return sortState
  }
}
