import { Truck } from "../Truck";

import { LightContainer } from "../LightContainer";

import { HeavyContainer } from "../HeavyContainer";

describe("Truck", () => {
  test("This returns the getTotalWeight 0, because of container value null", () => {
    // Here default maxWeight is equal to 0 because of cargoWeight or containerWeight is null
    const newTruck = new Truck(200);
    // const lightContainer = new LightContainer("Chicago",cargoWeight);
    const lightContainer = new LightContainer("Chicago");
    newTruck.addContainer(lightContainer);
    expect(newTruck.getTotalWeight()).toBe(0);
  });

  test("This returns the getTotalWeight 500, because container weight is 500", () => {
    const newTruck = new Truck(500);
    const lightContainer = new LightContainer("Chicago", 500);
    newTruck.addContainer(lightContainer);
    expect(newTruck.getTotalWeight()).toBe(500);
  });

  test("This returns the isOverweight to true, because total weight is greaterthan maxWeight", () => {
    // Here result > maxWeight: 450 > 400
    const newTruck = new Truck(400);
    // const heavyContainer = new HeavyContainer(tareWeight, "destination", cargoWeight);
    const heavyContainer = new HeavyContainer(100, "Michigan", 350);
    newTruck.addContainer(heavyContainer);
    expect(newTruck.isOverweight()).toBe(true);
  });

  test("This returns the isOverweight to false, because total weight is lessthan maxWeight", () => {
    // Here result < maxWeight: 650 < 900
    const newTruck = new Truck(900);
    const heavyContainer = new HeavyContainer(100, "Michigan", 550);
    newTruck.addContainer(heavyContainer);
    expect(newTruck.isOverweight()).toBe(false);
  });

  test("This returns the isOverweight to false, because total weight is equal to maxWeight", () => {
    // Here result = maxWeight: 900 = 900
    const newTruck = new Truck(900);
    const heavyContainer = new HeavyContainer(350, "Michigan", 550);
    newTruck.addContainer(heavyContainer);
    expect(newTruck.isOverweight()).toBe(false);
  });
});
