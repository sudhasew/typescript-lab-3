import { ShippingContainer } from "./ShippingContainer";

import { Transporter } from "./Transporter";

import { Ship } from "./Ship";
export function findContainersByDestination(
  containers: ShippingContainer[],
  destination: string
) {
  let resultContainers: ShippingContainer[] = [];
  for (let i = 0; i < containers.length; i++) {
    if (containers[i].destination === destination) {
      resultContainers.push(containers[i]);
      console.log("containers destination is", containers[i].destination);
    }
  }
  return resultContainers;
}

export function findOverweightTransporters(transporters: Transporter[]) {
  return transporters.filter(
    (transporter) => transporter.isOverweight() === true
  );
}

export function isSafeToAddContainer(ship: Ship, container: ShippingContainer) {
  if (ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight)
    return true;
  else {
    return false;
  }
}
