export const loadUserDataFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  return { token, refreshToken };
};
