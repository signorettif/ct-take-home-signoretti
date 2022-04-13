interface SearchResults {
  VehRentalCore: {
    '@PickUpDateTime': string;
    '@ReturnDateTime': string;
    PickUpLocation: {
      '@Name': string;
    };
    ReturnLocation: {
      '@Name': string;
    };
  };
  VehVendorAvails: {
    Vendor: {
      '@Code': string;
      '@Name': string;
    };
    VehAvails: CarDetails[];
  }[];
}
