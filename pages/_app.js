import { AuthProvider } from "../components/contexts/auth";
import Wrapper from "../components/Wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </AuthProvider>
  );
}

export default MyApp;
