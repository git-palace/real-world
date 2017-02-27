const promiseMiddleware = store => next => action => {
  if (isPromise(action.payLoad)) {
    action.payLoad.then(
      res => {
        action.payLoad = res
        store.dispatch(action)
      },
      error => {
        action.error = true
        action.payLoad = error.response.body
        store.dispatch(action)
      }
    )
    return;
  }

  next(action)
}

function isPromise(v) {
  return v && typeof v.then === 'function'
}

export {
  promiseMiddleware
}