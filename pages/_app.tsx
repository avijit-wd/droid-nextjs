import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../layout/AuthLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </SessionProvider>
    </ChakraProvider>
  );
}
