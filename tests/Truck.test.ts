import { Truck } from "../Truck";

describe("Truck", () => {
  test("This returns the container properties", () => {
    const newTruck = new Truck(500);
    expect(newTruck.getTotalWeight()).toBe(0);
  });
  test("This returns the container properties", () => {
    const newTruck = new Truck(400);
    expect(newTruck.isOverweight()).toBe(false);
  });
  test("This returns the container properties", () => {
    const newTruck = new Truck(900);
    expect(newTruck.isOverweight()).toBe(false);
  });
});
