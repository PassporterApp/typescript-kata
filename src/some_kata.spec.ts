import { expect } from "@jest/globals"
import { someFunction } from "./some_kata"

describe("Some kata", () => {
  it("should return true", () => {
    expect(true).toBe(true)
  })

  it("should return string", () => {
    expect(someFunction()).toEqual('test')
  }) 
})
