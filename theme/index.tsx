import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
  },
};

const fonts = {
  body: "Inter, sans-serif",
};

export const theme = extendTheme({ colors, fonts });
