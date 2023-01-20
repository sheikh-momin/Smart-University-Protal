import "../styles/globals.css";
import AuthProvider from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  );
}
