import { combineReducers } from 'redux'
import playlist from './playlist'
import filter from './filter'
import sort from './sort'
import pageSize from './pageSize'
import currentPage from './currentPage'

export default combineReducers({
  playlist,
  filter,
  sort,
  pageSize,
  currentPage,
})
