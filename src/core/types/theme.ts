export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: number;
      medium: number;
      large: number;
    };
    fontWeight: {
      regular: number;
      medium: number;
      bold: number;
    };
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  zIndex: {
    modal: number;
    drawer: number;
    tooltip: number;
    popover: number;
  };
}
