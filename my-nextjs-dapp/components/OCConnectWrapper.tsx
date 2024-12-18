import { ReactNode } from "react";
import { OCConnect } from "@opencampus/ocid-connect-js";

interface OCConnectWrapperProps {
  children: ReactNode;
  opts: {
    redirectUri: string;
    referralCode: string;
  };
  sandboxMode: boolean;
}

const OCConnectWrapper: React.FC<OCConnectWrapperProps> = ({
                                                             children,
                                                             opts,
                                                             sandboxMode,
                                                           }) => {
  return (
      <OCConnect opts={opts} sandboxMode={sandboxMode}>
        {children}
      </OCConnect>
  );
};

export default OCConnectWrapper;
