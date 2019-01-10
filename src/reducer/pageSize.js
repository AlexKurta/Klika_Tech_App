import { CHANGE_PAGE_SIZE } from '../constants'

const defaultpageSize = '5'

export default (pageSizeState = defaultpageSize, action) => {
  const { type, payload } = action

  switch (type) {
    //изменение размера страницы плейлиста
    case CHANGE_PAGE_SIZE:
      if (pageSizeState === payload.pageSize) return pageSizeState
      return payload.pageSize

    default:
      return pageSizeState
  }
}
