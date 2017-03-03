import agent from './agent'

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payLoad)) {
    store.dispatch({ type: 'ASYNC_START', subtype: action.type })
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

const localStorageMiddleware = store => next => action => {
  if (action.type === 'REGISTER' || action.type === 'LOGIN') {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payLoad.user.token)
      agent.setToken(action.payLoad.user.token)
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '')
    agent.setToken(null)
  }

  next(action)
}

export {
  localStorageMiddleware,
  promiseMiddleware
}