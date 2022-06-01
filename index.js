//require mongoose
const mongoose = require('mongoose');


//if error then console log it
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/peopleDB');
}
//asign db on specfic port (27017)
// async function main() {
//   mongoose.connect('mongodb://localhost:27017/fruitsDB');
// }
// console.log("conected to localhost at 27017");
//create a SCHEMA witch show what kind of fields all documents will have and theirs datatypes

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

//create a MODEL, which is a class with which we construct each documents with properties from a SCHEMA
const Fruit = mongoose.model("Fruit", fruitSchema);

//create a DOCUMENT
const fruit = new Fruit({
  name: "Apple",
  rating: 1,
  review: "Great!"
});

// fruit.save();
// console.log("new DB create, and saved");

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/peopleDB');
// }
//
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favouriteFruit: fruitSchema
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Zajebisty"
});
// pineapple.save();

const durian = new Fruit({
  name: "Durian",
  rating: 2,
  review: "Smelly"
});
// durian.save();



const Person = mongoose.model("Person", peopleSchema);

const alan = new Person({
  name: "Alan",
  age: 28,
  favouriteFruit: durian
});
// alan.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});
 // person.save();

 const kiwi = new Fruit({
   name: "Kiwi",
   rating: 10,
   review: "The best"
 })

 const orange = new Fruit({
   name: "orange",
   rating: 4,
   review: "The 4th"
 })
 const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "bananannananna"
  })
//
// Fruit.insertMany([fruit, kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log("All fruits saved");
//   }
// });
//
// Fruit.deleteOne({name: "Pineapple"}, function(err){
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("Success delete a document");
//   }
// });
//
// Fruit.updateOne({name: "pineapple"}, {rating: 9}, function(err){
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("Succes update an pineapple");
//   }
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }
  else{



    fruits.forEach(function(fruit){
      console.log(fruit.name);
  mongoose.connection.close();
    });
  }

});
