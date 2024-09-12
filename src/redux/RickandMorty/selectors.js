export const selectArray = (state) => {
  return state.operations.array;
};
export const selectLoading = (state) => {
  return state.operations.isLoading;
};
export const selectError = (state) => {
  return state.operations.error;
};
export const selectTotal = (state) => {
  return state.operations.total;
};
