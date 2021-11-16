export const createAlbumsPromiseThunk = (type, promiseFn) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  
  return param => async(dispatch) => {
    dispatch({type, param});
    try {
      const payload = await promiseFn(param);
      console.log("콘솔")
      console.log(payload)
      dispatch({type: SUCCESS, payload});
    }
    catch (e) {
      dispatch({type: ERROR, error: e})
    }
  }
}

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevData = null) => ({
    loading: true,
    data: prevData,
    error: null
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error
  })
}

export const handleAlbumsAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch(action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null)
        }
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.error)
        }
      default:
        return state;
    }
  }
}