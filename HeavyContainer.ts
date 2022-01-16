import { ShippingContainer } from "./shippingContainer";

export class HeavyContainer implements ShippingContainer {
  tareWeight: number;
  destination: string;
  cargoWeight: number;

  constructor(
    tareWeight: number,
    destination: string,
    cargoWeight: number = 0
  ) {
    this.tareWeight = tareWeight;
    this.destination = destination;
    this.cargoWeight = cargoWeight;
  }
  getGrossWeight(): number {
    let grossWeight = this.tareWeight + this.cargoWeight;
    return grossWeight;
  }
}
