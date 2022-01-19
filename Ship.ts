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
    this.containers.push(container);
  }
  getTotalWeight() {
    if (this.containers === []) {
      return 0;
    } else {
      let totalGrossWeight = 0;
      for (let i = 0; i < this.containers.length; i++) {
        totalGrossWeight += this.containers[i].getGrossWeight();
      }
      console.log("totalGrossWeight is", totalGrossWeight);
      return totalGrossWeight;
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

// const newShip = new Ship(400);
// console.log(newShip.maxWeight);
