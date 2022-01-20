import { ShippingContainer } from "./shippingContainer";
import { Transporter } from "./Transporter";

export class Truck implements Transporter {
  maxWeight: number;
  container: ShippingContainer | null = null;

  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
  }
  addContainer(container: ShippingContainer): void {
    this.container = container;
  }
  getTotalWeight() {
    if (this.container === null) {
      return 0;
    } else {
      return this.container.getGrossWeight();
    }
  }
  isOverweight() {
    let result = this.getTotalWeight();
    if (result > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
// const newTruck = new Truck(700);

// console.log(newTruck.maxWeight);
