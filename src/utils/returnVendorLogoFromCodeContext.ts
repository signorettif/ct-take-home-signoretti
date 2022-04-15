const codeContextToVendorLogo = Object.freeze({
  AVIS: '/images/avis-logo.svg',
  HERTZ: '/images/hertz-logo.svg',
  ALAMO: '/images/alamo-logo.svg',
});

export const returnVendorLogoFromCodeContext = (vendor: string) => {
  if (codeContextToVendorLogo.hasOwnProperty(vendor)) {
    return codeContextToVendorLogo[
      vendor as keyof typeof codeContextToVendorLogo
    ];
  }

  return '';
};
