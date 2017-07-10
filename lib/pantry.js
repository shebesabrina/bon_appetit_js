export default class Pantry {
  constructor () {
    this.stock        = {}
    this.shoppingList = {}
  }

  stockCheck (item) {
    return this.stock[item] || 0
  }

  restock (item, amount) {
    this.stock[item] = (this.stock[item] || 0) + amount
  }

  addToShoppingList ({ ingredients }) {
    Object.keys(ingredients)
      .forEach(ingredient => {
        this.shoppingList[ingredient] = (this.shoppingList[ingredient] || 0) + ingredients[ingredient]
      })
  }
}
