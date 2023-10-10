import strictEquals from "./strictEquals";

describe("Given a scriptEqual function ", () => {
  describe("When recibes 1 and 1", () => {
    test("Then it should retourn true", () => {
      const valueA = 1;
      const valueB = 1;
      const isExpectStrictEqual = true;

      const isStrictEqualValue = strictEquals(valueA, valueB);

      expect(isStrictEqualValue).toBe(isExpectStrictEqual);
    });
  });
});
