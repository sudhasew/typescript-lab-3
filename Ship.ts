import { ShippingContainer } from "./shippingContainer";
import { Transporter } from "./Transporter";
export class Ship implements Transporter {
  maxWeight: number;
  containers: ShippingContainer[] = [];
  getGrossWeight: any;
  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
  }
  addContainer(container: ShippingContainer): void {
    this.containers, container;
  }
  getTotalWeight() {
    if (this.containers === []) {
      return 0;
    } else {
      return this.containers + this.getGrossWeight();
    }
  }
  isOverweight() {
    let result2 = this.getTotalWeight();
    if (result2 > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
