import { ShippingContainer } from "./shippingContainer";

export class LightContainer implements ShippingContainer {
  destination: string;
  cargoWeight: number;

  constructor(destination: string, cargoWeight: number = 0) {
    this.destination = destination;
    this.cargoWeight = cargoWeight;
  }
  getGrossWeight() {
    return this.cargoWeight;
  }
}
// const lightContainer = new LightContainer("Chicago", 10);

// console.log(lightContainer.cargoWeight, lightContainer.destination);
