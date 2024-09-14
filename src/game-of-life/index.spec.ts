import { gameOfLife } from ".";

describe("When modeling game of life", () => {
  it("should not throw an exception", () => {
    expect(() => gameOfLife()).not.toThrow();
  });
});
