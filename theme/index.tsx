import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  primary: "#7132C1",
  secondary: "#1B1D28",
  tertiary: "#34394E",

  text: {
    primary: "#E5E5E5",
    secondary: "#7D8193",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "Inter, sans-serif",
};

export const theme = extendTheme({ colors, fonts, config });
