const codeContextToVendorLogo = Object.freeze({
  CARTRAWLER: './images/ct-logo-dark.svg',
});

export const returnVendorLogoFromCodeContext = (vendor: string) => {
  if (codeContextToVendorLogo.hasOwnProperty(vendor)) {
    return codeContextToVendorLogo[
      vendor as keyof typeof codeContextToVendorLogo
    ];
  }

  return '';
};
