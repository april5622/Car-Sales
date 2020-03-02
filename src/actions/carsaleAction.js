
export const buyItem = item => {
    return {
      type: "BUY_ITEM",
      payload: item
    }
  }
  
  export const removeFeature = item => {
    return {
      type: "REMOVE_FEATURE",
      payload: item
    }
  }

export const newTotal = item => {
  return {
    type: "NEW_TOTAL",
    payload: item
  }
}