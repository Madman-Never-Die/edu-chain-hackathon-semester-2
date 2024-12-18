import OCConnectWrapper from "../components/OCConnectWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const opts = {
    redirectUri: "http://localhost:3000/redirect", // Redirect URL
    referralCode: "PARTNER6", // Partner code
  };

  return (
      <OCConnectWrapper opts={opts} sandboxMode={true}>
        <Component {...pageProps} />
      </OCConnectWrapper>
  );
}

export default MyApp;
