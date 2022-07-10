//* main difference is arrow functions do not have their own this
const user = {
  name: 'HEllo world',
  functTest() {
    console.log('----functTest---', this.name) // HEllo world
  },
  arrowTest: () => {
    console.log('----arrowTest----', this.name) // undefined
  },
}
user.functTest()
user.arrowTest()
 