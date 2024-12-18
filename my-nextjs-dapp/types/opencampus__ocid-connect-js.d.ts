declare module "@opencampus/ocid-connect-js" {
  import { ReactNode } from "react";

  export interface OCConnectProps {
    opts: {
      redirectUri: string;
      referralCode: string;
    };
    sandboxMode?: boolean;
    children?: ReactNode;
  }

  export const OCConnect: React.FC<OCConnectProps>;

  export interface LoginCallBackProps {
    errorCallback?: (error: Error) => void;
    successCallback?: () => void;
    customErrorComponent?: ReactNode;
    customLoadingComponent?: ReactNode;
  }

  export const LoginCallBack: React.FC<LoginCallBackProps>;

  export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error?: Error | null;
  }

  export const useOCAuth: () => {
    authState: AuthState;
    ocAuth: {
      signInWithRedirect: (params?: { state?: string }) => Promise<void>;
      getAuthState: () => AuthState;
    };
  };
}
