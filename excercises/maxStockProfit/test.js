const maxStockProfit = require("./index");

describe("maxStockProfit", () => {
    it("should be defined", () => {
        expect(maxStockProfit).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof maxStockProfit).toEqual("function");
    });

    it("should calculate max profit", () => {
        expect(maxStockProfit([32, 46, 26, 38, 40, 48, 42])).toEqual(22);
        expect(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])).toEqual(12);
    });

    it("should return -1 when no profit possible", () => {
        expect(maxStockProfit([100, 93, 82, 76, 68, 51, 42])).toEqual(-1);
    });
});
