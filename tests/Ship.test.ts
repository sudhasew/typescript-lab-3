import { LightContainer } from "../LightContainer";
import { HeavyContainer } from "../HeavyContainer";
import { Ship } from "../Ship";
describe("Ship", () => {
  test("Here it returns the", () => {
    const newShip = new Ship(500);
    const lightContainer = new LightContainer("Detroit");
    const heavyContainer = new HeavyContainer(0, "Detroit");
    newShip.addContainer(lightContainer);
    newShip.addContainer(heavyContainer);
    expect(newShip.getTotalWeight()).toBe(0);
  });
  test("Here it returns the", () => {
    const newShip = new Ship(500);
    const lightContainer = new LightContainer("Detroit", 800);
    const heavyContainer = new HeavyContainer(300, "Detroit", 600);
    newShip.addContainer(lightContainer);
    newShip.addContainer(heavyContainer);
    expect(newShip.isOverweight()).toBe(true);
  });
  test("Here it returns the", () => {
    const newShip = new Ship(1500);
    const lightContainer = new LightContainer("Detroit", 2000);
    newShip.addContainer(lightContainer);
    const heavyContainer = new HeavyContainer(1000, "Detroit", 600);
    newShip.addContainer(heavyContainer);
    expect(newShip.isOverweight()).toBe(true);
  });
  test("Here it returns the", () => {
    const newShip = new Ship(10000);
    const lightContainer = new LightContainer("Detroit", 1100);
    newShip.addContainer(lightContainer);
    const heavyContainer = new HeavyContainer(200, "Detroit", 700);
    newShip.addContainer(heavyContainer);
    expect(newShip.isOverweight()).toBe(false);
  });
  test("Here it returns the", () => {
    const newShip = new Ship(1300);
    const lightContainer = new LightContainer("Detroit", 200);
    newShip.addContainer(lightContainer);
    const heavyContainer = new HeavyContainer(600, "Detroit", 500);
    newShip.addContainer(heavyContainer);
    expect(newShip.isOverweight()).toBe(false);
  });
});
