import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { authState } from "../atom/authState";
import { useOCAuth, LoginCallBack } from "@opencampus/ocid-connect-js";

export default function RedirectPage() {
  const router = useRouter();
  const { ocAuth } = useOCAuth();
  const setAuthState = useSetRecoilState(authState);

  const loginSuccess = async () => {
    try {
      const authInfo = ocAuth.getAuthState(); // 인증 상태 가져오기
      console.log("Login successful. Auth info:", authInfo);

      if (authInfo.isAuthenticated) {
        const newState = {
          isAuthenticated: true,
          loading: false,
          userInfo: authInfo,
        };

        setAuthState(newState);
        sessionStorage.setItem("authState", JSON.stringify(newState)); // 인증 상태 저장

        // 저장된 리다이렉트 경로로 이동
        const redirectPath = sessionStorage.getItem("redirectPath") || "/";
        sessionStorage.removeItem("redirectPath");
        router.replace(redirectPath); // 성공 시 이전 경로로 리다이렉트
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      const defaultState = { isAuthenticated: false, loading: false, userInfo: null };
      setAuthState(defaultState);
      sessionStorage.setItem("authState", JSON.stringify(defaultState)); // 초기 상태 저장
      router.push("/"); // 실패 시 홈으로 리다이렉트
    }
  };

  const loginError = (error: any) => {
    console.error("Login failed:", error);
    const defaultState = { isAuthenticated: false, loading: false, userInfo: null };
    setAuthState(defaultState);
    sessionStorage.setItem("authState", JSON.stringify(defaultState));
    router.push("/");
  };


  return (
      <LoginCallBack
          successCallback={loginSuccess}
          errorCallback={loginError}
          customLoadingComponent={<div>Loading...</div>}
      />
  );
}