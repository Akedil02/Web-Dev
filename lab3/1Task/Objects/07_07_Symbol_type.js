let id = Symbol("id");
let user = { name: "John", [id]: 123 };
console.log(user[id]);