function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, menuItem) {
  !restaurant.menus[menuItem.type].includes(menuItem) ?
    restaurant.menus[menuItem.type].push(menuItem) :
    restaurant.menus[menuItem.type]
}

function removeMenuItem(restaurant, menuItem, menuType) {
  let removeItem;

  restaurant.menus[menuType] !== undefined ?
    removeItem = restaurant.menus[menuType].find(name => restaurant.menus[menuType].splice(name, 1))
    : removeItem

  return (removeItem !== undefined ?
    `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
    :
    `Sorry, we don't sell ${menuItem}, try adding a new recipe!`)
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
