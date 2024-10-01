import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomColors {
    pastelGrey: string;
    loginBackgrounblue: string;
    cinder: string;
    brownishRed: string;
    seaShell: string;
    lightGreyBlue: string;
    lavender: string;
    greyFourty: string;
    codGrey: string;
    cyanBlue: string;
    aumRed: string;
    aumOrange: string;
    aumBlue: string;
    aumRedLight: string;
    aumOrangeLight: string;
    aumBlueLight: string;
    brightCerulean: string;
  }

  interface Palette {
    textDark: Palette["text"];
    customColors: CustomColors;
  }

  interface PaletteOptions {
    textDark?: PaletteOptions["text"];
    customColors?: CustomColors;
  }

  interface PaletteColor {
    darker?: string;
    50?: string;
    100?: string;
    200?: string;
    500?: string;
    800?: string;
    900?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    50?: string;
    100?: string;
    200?: string;
    500?: string;
    800?: string;
    900?: string;
  }

  interface TypographyVariants {
    body_400: React.CSSProperties;
    body_500: React.CSSProperties;
    body_600: React.CSSProperties;
    body_700: React.CSSProperties;
    subtitle_300: React.CSSProperties;
    subtitle_400: React.CSSProperties;
    subtitle_500: React.CSSProperties;
    subtitle_600: React.CSSProperties;
    overline_400: React.CSSProperties;
    overline_600: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body_400: React.CSSProperties;
    body_500: React.CSSProperties;
    body_600: React.CSSProperties;
    body_700: React.CSSProperties;
    subtitle_300: React.CSSProperties;
    subtitle_400: React.CSSProperties;
    subtitle_500: React.CSSProperties;
    subtitle_600: React.CSSProperties;
    overline_400: React.CSSProperties;
    overline_600: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body_400: true;
    body_500: true;
    body_600: true;
    body_700: true;
    subtitle_300: true;
    subtitle_400: true;
    subtitle_500: true;
    subtitle_600: true;
    overline_400: true;
    overline_600: true;
  }
}
