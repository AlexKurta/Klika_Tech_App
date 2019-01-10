import { START, SUCCESS, FAIL } from '../constants'

//запрос к предполагаемому серверу
export default store => next => action => {
  const { callAJAX, type, ...rest } = action
  if (!callAJAX) return next(action)

  next({
    ...rest,
    type: type + START,
  })

  fetch(callAJAX)
    .then(res => res.json())
    .then(response => next({ ...rest, type: type + SUCCESS, response }))
    .catch(error => next({ ...rest, type: type + FAIL, error }))
}
