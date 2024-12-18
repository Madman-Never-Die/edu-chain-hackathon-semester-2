import { LoginCallBack } from "@opencampus/ocid-connect-js";
import { useRouter } from "next/router";

const RedirectPage: React.FC = () => {
  const router = useRouter();

  const loginSuccess = () => {
    router.push("/");
  };

  const loginError = (error: Error) => {
    console.error("Login error:", error);
  };

  return (
      <LoginCallBack
          errorCallback={loginError}
          successCallback={loginSuccess}
          customErrorComponent={<div>Error during login!</div>}
          customLoadingComponent={<div>Loading...</div>}
      />
  );
};

export default RedirectPage;
