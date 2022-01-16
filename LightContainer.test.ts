import { LightContainer } from "./LightContainer";

//LightContainer;
describe("LightContainer", () => {
  const lightContainer = new LightContainer("Chicago", 10);
  test("This returns the containers destination Chicago", () => {
    expect(lightContainer.destination).toEqual("Chicago");
  });
  test("This returns the containers cargoWeight default value 0", () => {
    const lightContainer = new LightContainer("Chicago");
    expect(lightContainer.cargoWeight).toEqual(0);
  });
  test("This returns the containers cargoWeight 10", () => {
    const lightContainer = new LightContainer("Chicago", 10);
    expect(lightContainer.cargoWeight).toEqual(10);
  });
  test("This returns the containers grossWeight 20", () => {
    const lightContainer = new LightContainer("Chicago", 20);
    expect(lightContainer.getGrossWeight()).toEqual(20);
  });
  test("This returns the containers grossWeight 50", () => {
    const lightContainer = new LightContainer("Chicago", 50);
    expect(lightContainer.getGrossWeight()).toEqual(50);
  });
  test("This returns the containers grossWeight 50", () => {
    const lightContainer = new LightContainer("Chicago");
    expect(lightContainer.getGrossWeight()).toEqual(0);
  });
});
