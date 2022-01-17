import { HeavyContainer } from "../HeavyContainer";

describe("HeavyContainer", () => {
  test("This returns the tare weight of container to be 100", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.tareWeight).toBe(100);
  });
  test("This returns the destination of container to be Michigan", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.destination).toBe("Michigan");
  });
  test("This returns the cargoWeight of container to be 250", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.cargoWeight).toBe(250);
  });
  test("This returns the getGrossWeight of container to be 100", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan");
    expect(heavyContainer.getGrossWeight()).toBe(100);
  });
  test("This returns the getGrossWeight of container to be 350", () => {
    const heavyContainer = new HeavyContainer(100, "Michigan", 250);
    expect(heavyContainer.getGrossWeight()).toBe(350);
  });
  test("This returns the getGrossWeight of container to 0", () => {
    const heavyContainer = new HeavyContainer(0, "Michigan");
    expect(heavyContainer.getGrossWeight()).toBe(0);
  });
});
