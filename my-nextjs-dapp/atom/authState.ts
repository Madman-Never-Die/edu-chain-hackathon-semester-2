import { atom } from 'recoil';
export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false, // 인증 여부
    loading: false, // 로딩 상태
    userInfo: null, // 사용자 정보 (로그인 성공 시 저장)
  },
});