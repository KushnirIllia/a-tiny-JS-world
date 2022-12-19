import { print } from "./js/lib.js"
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const man = {
	species: "human",
	name: "John",
	gender: "man",
	legs: 2,
	hands: 2,
	saying: "Hi everyone",
}
const woman = {
	species: "human",
	name: "Milani",
	gender: "woman",
	legs: 2,
	hands: 2,
	saying: "Hi baby",
}
const dog = {
	species: "animal",
	name: "Jack",
	gender: "male",
	legs: 4,
	hands: 0,
	saying: "woof",
}
const cat = {
	species: "animal",
	name: "Bonia",
	gender: "woman",
	legs: 4,
	hands: 0,
	saying: "mauy",
}

print(
	`human; ${man.name}; ${man.gender}; ${man.legs}; ${man.hands}; ${man.saying}`
)
print(
	`human; ${woman.name}; ${woman.gender}; ${woman.legs}; ${woman.hands}; ${woman.saying}`
)
print(
	`animal; ${cat.name}; ${cat.gender}; ${cat.legs}; ${cat.hands}; ${cat.saying}`
)
print(
	`animal; ${dog.name}; ${dog.gender}; ${dog.legs}; ${dog.hands}; ${dog.saying}`
)

// function Human(name, gender, countOfLegs, countOfHands, words, ...friends) {
// 	this.name = name
// 	this.gender = gender
// 	this.countOfLegs = countOfLegs
// 	this.countOfHands = countOfHands
// 	this.words = words
// 	this.friends = friends.flat()

// 	this.greet = function () {
// 		console.log(this.words)
// 	}
// 	this.logFriends = function () {
// 		let str = ""
// 		this.friends.forEach((f) => (str += `${f} `))
// 		return str
// 	}
// }

// function Animal(name, countOfLegs, words, ...friends) {
// 	Human.call(this, name, null, countOfLegs, null, words, friends)
// }
// const catDack = new Animal("Dack", 4, "maow!")
// const john = new Human(
// 	"John",
// 	"man",
// 	2,
// 	2,
// 	"Hello world!",
// 	"Rex",
// 	"Tom",
// 	"Jenny"
// )

// print(
// 	`human; ${john?.name}; ${john?.gender}; ${john?.countOfLegs},${
// 		john?.countOfHands
// 	}; <em>${john?.words}</em>; ${john?.logFriends()}`
// )
// print(
// 	`animal; ${catDack.name}; ${catDack?.gender}; ${catDack?.countOfLegs}; <em>${catDack.words}</em>; ${catDack.logFriends()}`
// )
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styl1es.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; john; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>john</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>john</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
