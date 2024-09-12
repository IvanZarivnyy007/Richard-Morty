export const selectArray = (state) => {
  return state.operations.items;
};
export const selectLoading = (state) => {
  return state.operations.loading;
};
export const selectError = (state) => {
  return state.operations.error;
};
