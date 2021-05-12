let person = {
    name: "name",
    age: 25,
    isMarried: false,
};

console.log(person.name)
person.name = prompt("Как тебя зовут?", "");
console.log(person.name);
let age_ = confirm("Тебе есть 18?");
console.log(age_);