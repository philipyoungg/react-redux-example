export const INCREMENT_NUMBER = 'INCREMENT_NUMBER'
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER'

export const addNumber = () => ({
  type: INCREMENT_NUMBER,
})

export const removeNumber = () => ({
  type: DECREMENT_NUMBER,
})
