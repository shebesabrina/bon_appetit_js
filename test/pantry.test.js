import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry("Cheese", 10)

    it("has an ingredient", () => {
      expect(pantry.ingredient).to.equal("Cheese")
    })

    it("has a quantity", () => {
      expect(pantry.quantity).to.eql(10)
    })

   })
})
