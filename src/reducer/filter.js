import { FILTER_PLAYLIST } from '../constants'

const defaultFilters = {
  performer: '',
  genre: '',
  year: '',
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    //новые значения фильтров
    case FILTER_PLAYLIST:
      return { ...filters, [payload.name]: payload.value }

    default:
      return filters
  }
}
