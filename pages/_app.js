import "../styles/globals.css";
<<<<<<< HEAD
import AuthProvider from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  );
=======
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
>>>>>>> 8fac46fd4e1adea42cc4c79412101df89a8f9def
}
