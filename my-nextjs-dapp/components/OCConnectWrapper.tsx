import { ReactNode } from "react";
import { OCConnect } from "@opencampus/ocid-connect-js";

interface OCConnectWrapperProps {
  opts: {
    redirectUri: string;
    referralCode: string;
  };
  sandboxMode?: boolean;
  children: ReactNode;
}

const OCConnectWrapper: React.FC<OCConnectWrapperProps> = ({ opts, sandboxMode = false, children }) => {
  return (
      <OCConnect opts={opts} sandboxMode={sandboxMode}>
        {children}
      </OCConnect>
  );
};

export default OCConnectWrapper;