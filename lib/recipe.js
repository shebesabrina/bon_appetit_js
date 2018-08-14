// ES6

export default class Recipe {
  constructor (name) {
    this.name = name
    this.ingredients = {}
  }

  addIngredient (ingredientName, amount) {
    return this.ingredients[ingredientName] = amount
  }

  ingredientTypes () {
    return Object.keys(this.ingredients)
  }

  amountRequired (ingredientName) {
    return this.ingredients[ingredientName] || 0
  }
}


// ES5

// function Recipe (name) {
//   this.name = name
//   this.ingredients = {}
// }

// Recipe.prototype.addIngredient = function (ingredientName, amount) {
//   return this.ingredients[ingredientName] = amount
// }

// Recipe.prototype.ingredientTypes = function () {
//   return Object.keys(this.ingredients)
// }

// Recipe.prototype.amountRequired = function (ingredientName) {
//   return this.ingredients[ingredientName] || 0
// }

// module.exports = Recipe
