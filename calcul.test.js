const calcul = require("./calcul");
describe("test des opérations d'addition", () => {
  it("gives 2 pour 1+1", () => {
    expect(calcul(1, 1, "+")).toBe(2);
  });
});
