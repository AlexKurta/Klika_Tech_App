import {
  CHANGE_PAGE,
  CHANGE_PAGE_SIZE,
  FILTER_PLAYLIST,
  NEXT_PAGE,
} from '../constants'

const defaultCurrentPage = '1'

export default (currentPageState = defaultCurrentPage, action) => {
  const { type, payload } = action

  switch (type) {
    //изменение текущей страницы
    case CHANGE_PAGE:
      if (currentPageState === payload.page) return currentPageState
      return payload.page

    //переход на следующую страницу вперед/назад
    case NEXT_PAGE:
      if (payload.order === 'back') return --currentPageState
      if (payload.order === 'forward') return ++currentPageState
      break

    //при изменении размера страницы или значения фильтров переходим на начальную страницу
    case CHANGE_PAGE_SIZE:
    case FILTER_PLAYLIST:
      return defaultCurrentPage

    default:
      return currentPageState
  }
}
