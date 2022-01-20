import { findContainersByDestination } from "../functions";
import { LightContainer } from "../LightContainer";
import { HeavyContainer } from "../HeavyContainer";
import { ShippingContainer } from "../shippingContainer";
import { Ship } from "../Ship";
import { findOverweightTransporters } from "../functions";
import { isSafeToAddContainer } from "../functions";
import { Transporter } from "../Transporter";
describe("function", () => {
  test("Here it returns the destination of same destinations", () => {
    const lightContainer = new LightContainer("Michigan", 200);
    //const heavyContainer = new HeavyContainer(200, "Detroit", 300);
    let shippingContainerArray: ShippingContainer[] = [];
    shippingContainerArray.push(lightContainer);
    const containersArray = findContainersByDestination(
      shippingContainerArray,
      "Michigan"
    );
    expect(containersArray).toEqual(shippingContainerArray);
  });

  test("Here it returns the new array of same destinations", () => {
    const lightContainer = new LightContainer("Detroit", 200);
    const heavyContainer = new HeavyContainer(200, "Canada", 300);
    let shippingContainerArray: ShippingContainer[] = [];
    shippingContainerArray.push(lightContainer);
    shippingContainerArray.push(heavyContainer);
    const containersArray = findContainersByDestination(
      shippingContainerArray,
      "Detroit"
    );
    let resultShippingContainerArray: ShippingContainer[] = [];
    resultShippingContainerArray.push(lightContainer);
    expect(containersArray).toEqual(resultShippingContainerArray);
  });
  test("Here it returns the destination of same destinations", () => {
    const lightContainer = new LightContainer("Detroit", 200);
    const heavyContainer = new HeavyContainer(200, "Detroit", 300);
    let shippingContainerArray: ShippingContainer[] = [];
    shippingContainerArray.push(lightContainer);
    shippingContainerArray.push(heavyContainer);

    const containersArray = findContainersByDestination(
      shippingContainerArray,
      "Detroit"
    );
    let resultShippingContainerArray: ShippingContainer[] = [];
    resultShippingContainerArray.push(lightContainer);
    resultShippingContainerArray.push(heavyContainer);
    expect(containersArray).toEqual(resultShippingContainerArray);
  });
  test("Here it returns the destination of same destinations", () => {
    const lightContainer = new LightContainer("Chicago", 200);
    const heavyContainer = new HeavyContainer(200, "Boston", 300);
    let shippingContainerArray: ShippingContainer[] = [];
    shippingContainerArray.push(lightContainer);
    shippingContainerArray.push(heavyContainer);

    const containersArray = findContainersByDestination(
      shippingContainerArray,
      "Detroit"
    );
    let resultShippingContainerArray: ShippingContainer[] = [];
    expect(containersArray).toEqual(resultShippingContainerArray);
  });

  test("Here it returns the destination of an empty array", () => {
    let shippingContainerArray: ShippingContainer[] = [];
    const containersArray = findContainersByDestination(
      shippingContainerArray,
      "Detroit"
    );
    expect(containersArray).toEqual(shippingContainerArray);
  });
});

describe("findOverweightTransporters", () => {
  test("return an array of transporters", () => {
    let shipArray: Ship[] = [];
    let ship = new Ship(4000);
    ship.addContainer(new LightContainer("Canada", 2000));
    shipArray.push(ship);
    let ship2 = new Ship(5000);
    ship2.addContainer(new LightContainer("Michigan", 10000));
    shipArray.push(ship2);
    let shipArrayResult: Ship[] = [];
    shipArrayResult.push(ship2);
    const newTransporter = findOverweightTransporters(shipArray);
    expect(newTransporter).toEqual(shipArrayResult);
  });
  test("return an array of transporters", () => {
    let shipArray: Ship[] = [];
    let ship = new Ship(4000);
    ship.addContainer(new LightContainer("Canada", 20000));
    shipArray.push(ship);
    let ship2 = new Ship(5000);
    ship2.addContainer(new LightContainer("Michigan", 10000));
    shipArray.push(ship2);
    let shipArrayResult: Ship[] = [];
    shipArrayResult.push(ship);
    shipArrayResult.push(ship2);
    const newTransporter = findOverweightTransporters(shipArray);
    expect(newTransporter).toEqual(shipArrayResult);
  });
  test("return an array of transporters", () => {
    let shipArray: Ship[] = [];
    let ship = new Ship(4000);
    ship.addContainer(new LightContainer("Canada", 1000));
    shipArray.push(ship);
    let ship2 = new Ship(5000);
    ship2.addContainer(new LightContainer("Michigan", 2000));
    shipArray.push(ship2);
    let shipArrayResult: Ship[] = [];
    shipArrayResult.push(ship);
    shipArrayResult.push(ship2);
    const newTransporter = findOverweightTransporters(shipArray);
    expect(newTransporter).toEqual([]);
  });
  test("return an array of transporters", () => {
    let shipArray: Ship[] = [];
    //let ship = new Ship(4000);
    const newTransporter = findOverweightTransporters(shipArray);
    expect(newTransporter).toEqual([]);
  });
});

describe("isSafeToAddContainer", () => {
  test("Here it returns true for an empty container ship and empty light container", () => {
    const lightContainer = new LightContainer("Detroit", 0);
    let ship = new Ship(5000);
    let result = isSafeToAddContainer(ship, lightContainer);
    expect(result).toBe(true);
  });
  test("Here it returns true for an empty container ship and light container", () => {
    const lightContainer = new LightContainer("Detroit", 3500);
    let ship = new Ship(4000);
    let result = isSafeToAddContainer(ship, lightContainer);
    expect(result).toBe(true);
  });
  test("Here it returns true for an empty container ship and heavy container", () => {
    const heavyContainer = new HeavyContainer(400, "Detroit", 3500);
    let ship = new Ship(4500);
    let result = isSafeToAddContainer(ship, heavyContainer);
    expect(result).toBe(true);
  });
  test("Here it returns true for an empty container ship and light container", () => {
    const lightContainer = new LightContainer("Detroit", 4500);
    let ship = new Ship(4200);
    let result = isSafeToAddContainer(ship, lightContainer);
    expect(result).toBe(false);
  });
  test("Here it returns true for an empty container ship and heavy container", () => {
    const heavyContainer = new HeavyContainer(400, "Detroit", 3500);
    let ship = new Ship(3500);
    let result = isSafeToAddContainer(ship, heavyContainer);
    expect(result).toBe(false);
  });
  test("Here it returns true for an empty container ship and light container are equal", () => {
    const lightContainer = new LightContainer("Michigan", 4000);
    let ship = new Ship(4000);
    let result = isSafeToAddContainer(ship, lightContainer);
    expect(result).toBe(true);
  });
  test("Here it returns true for an empty container ship and added a weight light", () => {
    const lightContainer = new LightContainer("Michigan", 3800);
    let ship = new Ship(4000);
    let result = isSafeToAddContainer(ship, lightContainer);
    expect(result).toBe(true);
  });
  test("Here it returns true for an empty container ship and added a weight heavy", () => {
    const heavyContainer = new HeavyContainer(1000, "Michigan", 4500);
    let ship = new Ship(4000);
    ship.addContainer(heavyContainer);
    let result = isSafeToAddContainer(ship, heavyContainer);
    expect(result).toBe(false);
  });
});
