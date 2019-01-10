//возвращаем массив уникальных значений ключей, на входе массив из объектов
export function getOptions(arr, key) {
  const set = new Set(arr.map(item => item[key]))
  const newArr = []
  set.forEach(value => newArr.push(value))
  return newArr
}

//возвращаем отфильтрованный массив, на входе массив из объектов и значения фильтров
export function getFilteredPlaylist(playlist, filter) {
  const { performer, genre, year } = filter
  return playlist.filter(
    item =>
      /*eslint-disable*/
      (!performer || item.performer == performer) &&
      (!genre || item.genre == genre) &&
      (!year || item.year == year)
  )
}

//возвращаем отсортированный массив, на входе массив из объектов и объект со значениями для сортировки
export function getSortedPlaylist(playlist, sort) {
  let sortType, sortColumn, compare
  //выбираем ключи (колонка и направление сортировки)
  for (let key in sort) {
    if (sort[key] !== 'sort') {
      sortType = sort[key]
      sortColumn = key
    }
  }
  //нечего сортировать
  if (!sortColumn) return playlist
  //функция сортировки
  compare = (A, B) => {
    switch (sortColumn) {
      //строковые значения
      case 'performer':
      case 'song':
      case 'genre':
        const a = A[sortColumn].toLowerCase().trim()
        const b = B[sortColumn].toLowerCase().trim()
        switch (sortType) {
          //по возростанию
          case 'sort-up':
            if (a < b) return -1
            if (a > b) return 1
          //по убыванию
          case 'sort-down':
            if (a > b) return -1
            if (a < b) return 1
        }
        break
      //числовые значения
      case 'year':
        switch (sortType) {
          //по возростанию
          case 'sort-up':
            return A.year - B.year
          //по убыванию
          case 'sort-down':
            return B.year - A.year
        }
    }
  }
  return playlist.sort(compare)
}
