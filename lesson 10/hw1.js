let person = {
    name : "Bob",
    occupation: "web developer",
    hobbies: "painting",
}

//ways to access the properties of object
//dot notation
console.log(person.name);
//bracket notation
console.log(person["occupation"]);
// bracket notation with variables
let prop = "hobbies";
console.log(person[prop]);

//detructuring
let {name, occupation, hobbies} = person;
// console.log(name, occupation, hobbies);
console.log(name);
console.log(occupation);
console.log(hobbies);