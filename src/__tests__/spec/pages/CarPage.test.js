import { render, screen } from "utils/test";

import CarPage from "pages/CarPage/CarPage";
import * as carHooks from "hooks/cars";

import carMock from "fixtures/car.json";

describe("pages/CarPage", () => {
  beforeEach(() => {
    jest.spyOn(carHooks, "useCar");
  });

  it("renders the CardCard when a car is found", () => {
    carHooks.useCar.mockReturnValue(carMock);
    render(<CarPage />);
    expect(
      screen.queryByText("We could not find what you're looking for")
    ).not.toBeInTheDocument();
  });

  it("shows the empty state when no car is found", () => {
    carHooks.useCar.mockReturnValue(undefined);
    render(<CarPage />);
    expect(
      screen.getByText("We could not find what you're looking for")
    ).toBeInTheDocument();
  });
});
