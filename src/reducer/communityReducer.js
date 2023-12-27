export const communityReducer = {
  communityList(state = [], action) {
    switch (action.type) {
      case 'COMMUNITY_ADDED': {
        return [...state, ...action.payload]
      }
      default: {
        return state
      }
    }
  },
  communityDetailData(state = {}, action) {
    switch (action.type) {
      case 'COMMUNITY_DETAIL': {
        return { ...state, ...action.payload }
      }
      default: {
        return state
      }
    }
  },
}
