interface CarDetails {
  '@Status': 'Available';
  TotalCharge: {
    '@CurrencyCode': string;
    '@EstimatedTotalAmount': string;
    '@RateTotalAmount': string;
  };
  Vehicle: {
    '@AirConditionInd': string;
    '@BaggageQuantity': string;
    '@Code': string;
    '@CodeContext': string;
    '@DoorCount': string;
    '@DriveType': string;
    '@FuelType': string;
    '@PassengerQuantity': string;
    '@TransmissionType': string;
    PictureURL: string;
    VehMakeModel: {
      '@Name': 'Toyota Rav4 or similar';
    };
  };
}
