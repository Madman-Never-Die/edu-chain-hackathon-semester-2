import "../styles/globals.css";
import Head from "next/head";
import MainHeader from "../components/MainHeader";
import { RecoilRoot } from "recoil";
import AuthManager from "../components/AuthManager";
import OCConnectWrapper from "../components/OCConnectWrapper";

function MyApp({ Component, pageProps }: any) {
  const opts = {
    redirectUri: "http://localhost:3000/redirect",
    referralCode: "PARTNER6",
  };

  return (
      <RecoilRoot>
        <OCConnectWrapper opts={opts} sandboxMode={true}>
          <AuthManager protectedPaths={["/createAd"]}>
            <Head>
              <title>A² Finance</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader />
            <Component {...pageProps} />
          </AuthManager>
        </OCConnectWrapper>
      </RecoilRoot>
  );
}

export default MyApp;