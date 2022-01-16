import { HeavyContainer } from "./HeavyContainer";

describe("HeavyContainer", () => {
  test("This returns the tare weight of container", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.tareWeight).toBe(100);
  });
  test("This returns the tare weight of container", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.destination).toBe("Michigan");
  });
  test("This returns the tare weight of container", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.cargoWeight).toBe(250);
  });
  test("This returns the tare weight of container", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan");
    expect(heavyContainer.getGrossWeight()).toBe(100);
  });
  test("This returns the tare weight of container", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.getGrossWeight()).toBe(350);
  });
});
