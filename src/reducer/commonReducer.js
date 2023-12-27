export const commonReducer = {
  bottomSheet(state = false, action) {
    switch (action.type) {
      case 'BOTTOM_SHEET': {
        return !state
      }
      default: {
        return state
      }
    }
  },
}
