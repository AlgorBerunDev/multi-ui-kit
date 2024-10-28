import { ThemeConfig } from '../core/types/component-types';

export const mergeThemes = (
  baseTheme: ThemeConfig,
  overrides: Partial<ThemeConfig>,
): ThemeConfig => {
  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...overrides.colors,
    },
    spacing: {
      ...baseTheme.spacing,
      ...overrides.spacing,
    },
  };
};
