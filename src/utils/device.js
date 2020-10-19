const size = {
  mobileMedium: "360px",
  mobileLarge: "411px",
  tabletMedium: "760px",
  tabletLarge: "1000px",
  webSmall: "800px",
  webMedium: "1200px",
  webLarge: "1440px",
};

export const device = {
  mobileMedium: `(orientation: portrait) and (min-width: ${size.mobileMedium})`,
  mobileLarge: `(orientation: portrait) and (min-width: ${size.mobileLarge})`,
  tabletMedium: `(orientation: portrait) and (min-width: ${size.tabletMedium})`,
  tabletLarge: `(orientation: portrait) and (min-width: ${size.tabletLarge})`,
  webSmall: `(orientation: landscape) and (min-width: ${size.webSmall})`,
};
