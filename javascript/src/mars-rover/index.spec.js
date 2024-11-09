import { marsRover } from ".";

describe("When testing the rover", () => {
  it("should not throw exception", () => {
    expect(() => marsRover()).not.toThrow();
  });
});
