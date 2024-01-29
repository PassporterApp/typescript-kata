"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
describe("Some kata", () => {
    it("should return true", () => {
        (0, globals_1.expect)(true).toBe(true);
    });
});
