const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {

    },
    set appetizers(newAppetizer) {

    },
    get mains() {

    },
    set mains(newMain) {

    },
    get desserts() {

    },
    set desserts(newDessert) {

    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses.courseName.push(dish)
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses.courseName
        let index = Math.floor(Math.random() * dishes.length)
        return dishes[index]
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')

        const price = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${price}.`;
    }
}