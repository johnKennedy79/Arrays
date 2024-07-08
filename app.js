console.log("Hello World");
const colours = ["red, green, blue"];

// Push add to end
// Pop remove from end
// unshift add to start
// shift remove from start

// splice(start at index(n), remove nothing (n)(number of items), add `item string`);

// colours.splice(1, 1, `fuchsia`);
// colours.splice(1, 2, `fuchsia`, `hot pink`);

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);
blogPosts[3] = "My fourth blog post";
console.log(blogPosts[3]);

const myFavouriteFoods = ["Chilli", "Pizza", "Boreg", "Baklava"];

const myFavouriteColours = ["Red", "lime Green", "Black"];

const myFavouriteNumbers = [7, 17, 22, 76];

console.log(myFavouriteFoods);
console.log(myFavouriteColours);
console.log(myFavouriteNumbers);
myFavouriteNumbers.push(180, 348);
console.log(myFavouriteNumbers);
myFavouriteColours.splice(0, 1, "Chilli Red");
console.log(myFavouriteColours);
myFavouriteFoods.unshift("Biriyani");
console.log(myFavouriteFoods);
