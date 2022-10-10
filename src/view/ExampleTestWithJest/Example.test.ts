import { sum, trueFalse } from "./Example1";

describe("test function calculator sum", () => {
  it("Sum11111", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
describe("test function calculator sum", () => {
  it("trueFalse", () => {
    expect(trueFalse(1, 2)).toBe(2);
  });
});
