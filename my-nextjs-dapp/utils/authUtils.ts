// 세션스토리지에서 인증 상태를 가져오는 함수
export const getAuthStateFromSession = () => {
  const savedState = sessionStorage.getItem("authState");
  if (savedState) {
    try {
      return JSON.parse(savedState);
    } catch (error) {
      console.error("Failed to parse authState from sessionStorage:", error);
      return {
        isAuthenticated: false,
        loading: false,
        userInfo: null,
      };
    }
  }
  return {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
  };
};