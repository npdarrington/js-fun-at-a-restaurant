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
  if (restaurant.menus[menuItem.type].length > 0) {
      for(const item of restaurant.menus[menuItem.type]) {
        if (menuItem.name !== item.name) {
          restaurant.menus[menuItem.type].push(menuItem);
        }
      }
  } else {
    restaurant.menus[menuItem.type].push(menuItem)
  }
}

function removeMenuItem(restaurant, menuItem, menuType) {
  let removeItem;

  if (restaurant.menus[menuType] !== undefined) {
    removeItem = restaurant.menus[menuType].find(name =>  restaurant.menus[menuType].splice(name, 1));
  }

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
