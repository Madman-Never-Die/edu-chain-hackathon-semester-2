import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { authState } from "../atom/authState";
import { useOCAuth } from "@opencampus/ocid-connect-js";

interface AuthManagerProps {
  children: React.ReactNode;
  protectedPaths?: string[]; // 인증이 필요한 경로 리스트
}

const AuthManager: React.FC<AuthManagerProps> = ({ children, protectedPaths = [] }) => {
  const { ocAuth } = useOCAuth();
  const router = useRouter();
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const restoreAuthState = () => {
      const savedState = sessionStorage.getItem("authState");
      if (savedState) {
        setAuthState(JSON.parse(savedState)); // 세션스토리지에서 인증 상태 복구
      }
    };

    const checkAuth = async () => {
      try {
        const currentPath = router.pathname;
        const isProtectedPath = protectedPaths.includes(currentPath);

        if (isProtectedPath) {
          // 보호된 경로 접근 시 리다이렉트 경로 저장
          sessionStorage.setItem("redirectPath", currentPath);

          const authInfo = ocAuth.getAuthState(); // 최신 인증 상태 가져오기
          console.log("Authentication info:", authInfo);

          if (authInfo.isAuthenticated) {
            const newState = {
              isAuthenticated: true,
              loading: false,
              userInfo: authInfo,
            };

            setAuthState(newState);
            sessionStorage.setItem("authState", JSON.stringify(newState)); // 세션스토리지에 저장
          } else {
            console.log("User not authenticated, redirecting to login...");
            await ocAuth.signInWithRedirect({ state: "opencampus" });
          }
        }
      } catch (error) {
        console.error("Authentication error:", error);
        const defaultState = { isAuthenticated: false, loading: false, userInfo: null };
        setAuthState(defaultState);
        sessionStorage.setItem("authState", JSON.stringify(defaultState)); // 초기 상태 저장
        router.push("/"); // 인증 실패 시 홈으로 리다이렉트
      }
    };

    restoreAuthState(); // 세션스토리지에서 상태 복구
    checkAuth(); // 현재 인증 상태 확인
  }, [ocAuth, router.pathname, protectedPaths, setAuthState]);

  return <>{children}</>;
};

export default AuthManager;