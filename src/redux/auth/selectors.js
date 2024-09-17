export const selectUser = (state) => state.auth.user;
export const selectLogedIn = (state) => state.auth.LogedIn;
export const selectisLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.token;
export const selectisRefreshing = (state) => state.auth.isRefreshing;
