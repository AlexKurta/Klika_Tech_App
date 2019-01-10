import {
  LOAD_PLAYLIST,
  FILTER_PLAYLIST,
  SORT_PLAYLIST,
  CHANGE_PAGE_SIZE,
  CHANGE_PAGE,
  NEXT_PAGE,
} from '../constants'

//загрузка плейлиста
export function loadPlaylist() {
  return {
    type: LOAD_PLAYLIST,
    callAJAX: '../../serverData.json',
  }
}

//фильтрация плейлиста
export function filterPlaylist(name, value) {
  return {
    type: FILTER_PLAYLIST,
    payload: { name, value },
  }
}

//сортировка плейлиста
export function sortPlaylist(column) {
  return {
    type: SORT_PLAYLIST,
    payload: { column },
  }
}

//изменение размера отображения плейлиста 5/10/25/50/100
export function changePageSize(pageSize) {
  return {
    type: CHANGE_PAGE_SIZE,
    payload: { pageSize },
  }
}

//изменение страницы плейлиста
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: { page },
  }
}

//изменение страницы плейлиста вперед/назад
export function nextPage(order) {
  return {
    type: NEXT_PAGE,
    payload: { order },
  }
}
