export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: null,
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