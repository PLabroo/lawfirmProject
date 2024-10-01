import { createTheme } from "@mui/material";

const customBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1600,
};

const theme = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
  typography: {
    fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
    h1: {
      fontSize: 26,
      fontWeight: 600,
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 20,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 22,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 24,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 26,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 28,
      },
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "0.2px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 18,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 20,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 22,
      },
    },
    h3: {
      fontSize: 22,
      fontWeight: 600,
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 18,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 20,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 22,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 24,
      },
    },
    body_400: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.28px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 16,
      },
    },
    body_500: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.32px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 16,
      },
    },
    body_600: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "0.32px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 18,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 20,
      },
    },
    body_700: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "0.36px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 18,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 20,
      },
    },
    subtitle_300: {
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: "0.32px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 18,
      },
    },
    subtitle_400: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "0.32px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 16,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 18,
      },
    },
    subtitle_500: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.28px",
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 14,
      },
    },
    subtitle_600: {
      fontSize: 12,
      fontWeight: 600,
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 14,
      },
    },
    overline_400: {
      fontSize: 12,
      fontWeight: 400,
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 14,
      },
    },
    overline_600: {
      fontSize: 14,
      fontWeight: 600,
      [`@media (min-width:${customBreakpoints.xs}px) and (max-width:${customBreakpoints.sm}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.sm}px) and (max-width:${customBreakpoints.md}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.md}px) and (max-width:${customBreakpoints.lg}px)`]:
        {
          fontSize: 12,
        },
      [`@media (min-width:${customBreakpoints.lg}px) and (max-width:${customBreakpoints.xl}px)`]:
        {
          fontSize: 14,
        },
      [`@media (min-width:${customBreakpoints.xl}px)`]: {
        fontSize: 16,
      },
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      50: "#e9f4ff",
      100: "#b9ddff",
      200: "#68B5FF",
      500: "#1e90ff",
      800: "#114f8c",
      900: "#0d3c6b",
    },
    success: {
      50: "#e7faf2",
      100: "#b4efd8",
      500: "#0ecb81",
      800: "#087047",
      900: "#065536",
    },
    error: {
      50: "#feecf0",
      100: "#fbc5d0",
      500: "#f14366",
      800: "#852538",
      900: "#651c2b",
    },
    warning: {
      50: "#fef4e6",
      100: "#fdddb3",
      500: "#f79009",
      800: "#884f05",
      900: "#683c04",
    },
    text: {
      primary: "#111927",
      secondary: "#6c737f",
      disabled: "rgba(108, 115, 127, 0.35)",
    },
    textDark: {
      primary: "#edf2f7",
      secondary: "#a0aec0",
      disabled: "rgba(237, 242, 247, 0.35)",
    },
    grey: {
      50: "#f4f5f7",
      100: "#dde1e5",
      200: "#ccd2d8",
      300: "#b5bec7",
      400: "#a7b1bc",
      500: "#919eab",
      600: "#84909c",
      700: "#677079",
      800: "#50575e",
      900: "#3d4248",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },
    customColors: {
      pastelGrey: "#CDCDCD",
      loginBackgrounblue: "#2057A6",
      cinder: "#0F131F",
      brownishRed: "#A8382D",
      seaShell: "#F1F1F1",
      lightGreyBlue: "#A6B6D0",
      lavender: "#E6E6E6",
      greyFourty: "#666666",
      codGrey: "#181818",
      cyanBlue: "#3C92DC",
      aumRed: "#FF5630",
      aumOrange: "#FFAB00",
      aumBlue: "#1E90FF",
      aumRedLight: "#FF56301F",
      aumOrangeLight: "#FFAB001F",
      aumBlueLight: "#1E90FF1F",
      brightCerulean: "#00B8D9",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF ",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          paddingTop: "15px",
          paddingBottom: "15px",
          letterSpacing: "0.36px",
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body_400: "p",
          body_500: "p",
          body_600: "p",
          body_700: "p",
          subtitle_300: "p",
          subtitle_400: "p",
          subtitle_500: "p",
          subtitle_600: "p",
          overline_400: "p",
          overline_600: "p",
        },
      },
    },
  },
});

export default theme;
