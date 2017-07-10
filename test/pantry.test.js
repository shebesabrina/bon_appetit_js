import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  const pantry = new Pantry()

  describe("attributes", () => {
    it("has a stock", () => {
      expect(pantry.stock).to.eql({})
    })

    it("has a shopping list", () => {
      expect(pantry.shoppingList).to.eql({})
    })
  })

  describe("functions", () => {
    describe("#stockCheck", () => {
      it("returns 0 for an item that doesn't exist", () => {
        expect(pantry.stockCheck("Cheese")).to.equal(0)    
      })

      it("returns the amount of an item in the stock", () => {
        pantry.stock["Cheese"] = 10
        expect(pantry.stockCheck("Cheese")).to.equal(10)    
        pantry.stock = {}
      })

      it("returns the amount of a different item in the stock", () => {
        pantry.stock["Cheese"] = 10
        pantry.stock["Bread"] = 20
        expect(pantry.stockCheck("Bread")).to.equal(20)    
        pantry.stock = {}
      })
    })

    describe("#restock", () => {
      it("adds an item if it is not in the stock", () => {
        expect(pantry.stock).to.eql({})
        pantry.restock("Cheese", 10)
        expect(pantry.stock).to.eql({ "Cheese": 10 })    
      })

      it("increases the quantity of an item not in stock", () => {
        pantry.stock = {}
        expect(pantry.stockCheck("Cheese")).to.equal(0)    
        pantry.restock("Cheese", 10)
        expect(pantry.stockCheck("Cheese")).to.equal(10)    
      })

      it("increases the quantity of an item already in stock", () => {
        pantry.stock = { "Cheese": 100 }
        pantry.restock("Cheese", 10)
        expect(pantry.stockCheck("Cheese")).to.equal(110)    
      })
    })

    describe("#addToShoppingList", () => {
      const recipe = new Recipe("Pizza")
      recipe.addIngredient("Cheese", 15)
      recipe.addIngredient("Flour", 7)

      it("adds an item and quantity to shoppingList", () => {
        expect(pantry.shoppingList).to.eql({})
        pantry.addToShoppingList(recipe)
        expect(pantry.shoppingList).to.eql({
          "Cheese": 15,
          "Flour": 7
        })
      })

      it("increases an item's quantity if already on the list", () => {
        const soup = new Recipe("Soup")
        soup.addIngredient("Cheese", 10)
        pantry.addToShoppingList(soup)
        expect(pantry.shoppingList).to.eql({
          "Cheese": 25,
          "Flour": 7
        })
      })
    })
  })
})

