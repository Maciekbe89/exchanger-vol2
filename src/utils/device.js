const size = {
  mobileMedium: "360px",
  mobileLarge: "411px",
  tabletMedium: "760px",
  tabletLarge: "1000px",
};

export const device = {
  mobileMedium: `(orientation: portrait) and (min-width: ${size.mobileMedium})`,
  mobileMedium: `(orientation: portrait) and (min-width: ${size.mobileLarge})`,
  mobileMedium: `(orientation: portrait) and (min-width: ${size.tabletMedium})`,
  mobileMedium: `(orientation: portrait) and (min-width: ${size.tabletLarge})`,
};
