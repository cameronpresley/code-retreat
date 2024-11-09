import { gameOfLife } from ".";

describe("When testing game of life", () => {
  it("should not throw exception", () => {
    expect(() => gameOfLife).not.toThrow();
  });
});
