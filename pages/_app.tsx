import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import { NextComponentType, NextPageContext } from "next";
import { NextRouter } from "next/dist/next-server/lib/router/router";

interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router?: NextRouter;
}

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
