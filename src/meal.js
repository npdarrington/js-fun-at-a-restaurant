function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(foodItem, ingredients) {
  !ingredients.includes(foodItem) ?
    ingredients.push(foodItem) :
    ingredients
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
