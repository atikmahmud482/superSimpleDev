import { formateCurrency } from "../scripts/utils/money.js";

describe("test suite: formateCurrency", () => {
  it("converts cents into dollars", () => {
    expect(formateCurrency(2095)).toEqual("20.95");
  });
});
