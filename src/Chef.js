class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, morning) {
    return (!morning ?
    `Hello, ${name}!` :
    `Good morning, ${name}!`);
  }

  checkForFood(item) {
    var string;

    this.restaurant.menus[item.type].length > 0 ?
    (
      this.restaurant.menus[item.type].forEach(itemName => {
        item.name === itemName.name ?
        string = `Yes, we're serving ${item.name} today!` :
        string = `Sorry, we aren't serving ${item.name} today.`
      })
    ) :
    string = `Sorry, we aren't serving ${item.name} today.`

    return string;
  }
}

module.exports = Chef;
