import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif", // Use your custom font for headings
    body: "DM Sans, sans-serif", // Use your custom font for body text
  },
});

export default customTheme;