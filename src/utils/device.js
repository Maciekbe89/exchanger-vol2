const size = {
  mobileMedium: "360px",
  mobileLarge: "411px",
  tabletMedium: "760px",
  tabletLarge: "1000px",
  mobileLandscape: "799px",
  webSmall: "800px",
  webMedium: "1200px",
  webLarge: "1440px",
  webXLarge: "1650px",
  webXXLarge: "1920px",
};

export const device = {
  mobileMedium: `(orientation: portrait) and (min-width: ${size.mobileMedium})`,
  mobileLarge: `(orientation: portrait) and (min-width: ${size.mobileLarge})`,
  tabletMedium: `(orientation: portrait) and (min-width: ${size.tabletMedium})`,
  tabletLarge: `(orientation: portrait) and (min-width: ${size.tabletLarge})`,
  mobileLandscape: `(orientation: landscape) and (max-width: ${size.mobileLandscape})`,
  webSmall: `(orientation: landscape) and (min-width: ${size.webSmall})`,
  webMedium: `(orientation: landscape) and (min-width: ${size.webMedium})`,
  webLarge: `(orientation: landscape) and (min-width: ${size.webLarge})`,
  webXLarge: `(orientation: landscape) and (min-width: ${size.webXLarge})`,
  webXXLarge: `(orientation: landscape) and (min-width: ${size.webXXLarge})`,
};
