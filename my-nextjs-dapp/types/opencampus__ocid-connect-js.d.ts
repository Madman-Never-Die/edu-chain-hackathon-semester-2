declare module "@opencampus/ocid-connect-js" {
  import { ReactNode } from "react";

  /**
   * OCConnect Component Props
   */
  export interface OCConnectProps {
    opts: {
      redirectUri: string; // URL to return after the login process is completed
      referralCode: string; // Unique identifiers assigned to partners for tracking during OCID account's registration
    };
    sandboxMode?: boolean; // Connect to sandbox if set, default to live mode
    children?: ReactNode; // React children components
  }

  export const OCConnect: React.FC<OCConnectProps>;

  /**
   * LoginCallBack Component Props
   */
  export interface LoginCallBackProps {
    errorCallback?: (error: Error) => void; // Callback for login error
    successCallback?: () => void; // Callback for login success
    customErrorComponent?: ReactNode; // Custom error component
    customLoadingComponent?: ReactNode; // Custom loading component
  }

  export const LoginCallBack: React.FC<LoginCallBackProps>;

  /**
   * AuthState Interface
   */
  export interface AuthState {
    isAuthenticated: boolean; // User's authentication status
    isLoading: boolean; // Loading status during authentication
    error?: Error | null; // Error during authentication, if any
    accessToken?: string; // Access token
    idToken?: string; // ID token
    OCId?: string; // OC ID
    ethAddress?: string; // Ethereum address
  }

  /**
   * useOCAuth Hook
   */
  export const useOCAuth: () => {
    authState: AuthState; // Current authentication state
    ocAuth: {
      /**
       * Start the login process using redirect
       * @param params - Optional parameters such as state
       */
      signInWithRedirect: (params?: { state?: string }) => Promise<void>;

      /**
       * Handle login redirect and retrieve auth state
       * @returns AuthState
       */
      handleLoginRedirect: () => Promise<AuthState>;

      /**
       * Get the current authentication state
       * @returns AuthState
       */
      getAuthState: () => AuthState;
    };
  };
}